-- Supabase database schema for JacuzziHotels
-- Run this in your Supabase SQL editor

-- Create provinces table
CREATE TABLE IF NOT EXISTS provinces (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  seo_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cities table
CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  province_id INTEGER REFERENCES provinces(id) ON DELETE CASCADE,
  seo_text TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create hotels table
CREATE TABLE IF NOT EXISTS hotels (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  description TEXT,
  province_id INTEGER REFERENCES provinces(id) ON DELETE CASCADE,
  city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE,
  price_range VARCHAR(50),
  facilities JSONB DEFAULT '[]',
  affiliate_link TEXT,
  image_url TEXT,
  rating DECIMAL(2,1) DEFAULT 0.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create hotel_rooms table for different room types
CREATE TABLE IF NOT EXISTS hotel_rooms (
  id SERIAL PRIMARY KEY,
  hotel_id INTEGER REFERENCES hotels(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price_range VARCHAR(50),
  image_url TEXT,
  features JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create affiliate_clicks table for tracking clicks
CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id SERIAL PRIMARY KEY,
  hotel_id INTEGER REFERENCES hotels(id) ON DELETE CASCADE,
  hotel_name VARCHAR(200),
  affiliate_link TEXT,
  user_agent TEXT,
  ip_address INET,
  referer TEXT,
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_hotels_province_id ON hotels(province_id);
CREATE INDEX IF NOT EXISTS idx_hotels_city_id ON hotels(city_id);
CREATE INDEX IF NOT EXISTS idx_hotels_price_range ON hotels(price_range);
CREATE INDEX IF NOT EXISTS idx_cities_province_id ON cities(province_id);
CREATE INDEX IF NOT EXISTS idx_hotel_rooms_hotel_id ON hotel_rooms(hotel_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_hotel_id ON affiliate_clicks(hotel_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_clicked_at ON affiliate_clicks(clicked_at);

-- Insert sample data
INSERT INTO provinces (name, slug, seo_text) VALUES
('Noord-Holland', 'noord-holland', 'Ontdek de mooiste hotels met jacuzzi in Noord-Holland. Van Amsterdam tot Haarlem, vind de perfecte accommodatie voor een romantisch verblijf.'),
('Zuid-Holland', 'zuid-holland', 'Wellness en ontspanning in Zuid-Holland. Hotels met jacuzzi in Rotterdam, Den Haag en andere prachtige steden.'),
('Utrecht', 'utrecht', 'Romantische hotels met jacuzzi in Utrecht. Perfect voor een weekendje weg in het hart van Nederland.'),
('Gelderland', 'gelderland', 'Natuur en luxe combineren in Gelderland. Hotels met jacuzzi in Arnhem, Nijmegen en de Veluwe.'),
('Limburg', 'limburg', 'Heuvelachtig Limburg biedt prachtige hotels met jacuzzi. Van Maastricht tot Valkenburg, ontdek de mooiste plekken.'),
('Friesland', 'friesland', 'Ontdek de natuurlijke schoonheid van Friesland met luxe hotels met jacuzzi. Van de Friese meren tot de kust.'),
('Drenthe', 'drenthe', 'Rust en ontspanning in Drenthe. Hotels met jacuzzi te midden van prachtige natuur en historische hunebedden.'),
('Noord-Brabant', 'noord-brabant', 'Gezelligheid en luxe in Noord-Brabant. Hotels met jacuzzi in het hart van het Brabantse land.'),
('Overijssel', 'overijssel', 'Van Zwolle tot de Achterhoek, ontdek hotels met jacuzzi in het veelzijdige Overijssel.'),
('Groningen', 'groningen', 'Noordelijke gastvrijheid en wellness in Groningen. Hotels met jacuzzi in de bruisende universiteitssteden.'),
('Zeeland', 'zeeland', 'Ontdek de kust van Zeeland met luxe hotels met jacuzzi. Van Renesse tot Middelburg, geniet van wellness aan zee.');

INSERT INTO cities (name, slug, province_id, seo_text) VALUES
('Amsterdam', 'amsterdam', 1, 'Hotels met jacuzzi in Amsterdam. Van grachtenpanden tot moderne suites, vind de perfecte accommodatie in de hoofdstad.'),
('Haarlem', 'haarlem', 1, 'Charmante hotels met jacuzzi in Haarlem. Ontdek de historische stad met moderne wellness faciliteiten.'),
('Rotterdam', 'rotterdam', 2, 'Moderne hotels met jacuzzi in Rotterdam. Architectuur en ontspanning komen samen in de Maasstad.'),
('Den Haag', 'den-haag', 2, 'Elegante hotels met jacuzzi in Den Haag. Van het Binnenhof tot Scheveningen, ontdek luxe accommodaties.'),
('Utrecht', 'utrecht', 3, 'Historische hotels met jacuzzi in Utrecht. Perfect voor een romantisch weekend in de Domstad.'),
('Arnhem', 'arnhem', 4, 'Hotels met jacuzzi in Arnhem. Natuur en cultuur combineren in deze Gelderse stad.'),
('Maastricht', 'maastricht', 5, 'Romantische hotels met jacuzzi in Maastricht. Ontdek de Bourgondische sfeer van de zuidelijkste stad van Nederland.'),
('Apeldoorn', 'apeldoorn', 4, 'Hotels met jacuzzi in Apeldoorn. Gelegen nabij het Nationale Park De Hoge Veluwe en Het Loo.'),
('Schiphol', 'schiphol', 1, 'Hotels met jacuzzi bij Schiphol. Perfect voor een tussenstop of een luxe verblijf nabij de luchthaven.'),
('Wolvega', 'wolvega', 6, 'Hotels met jacuzzi in Wolvega. Ontspanning in het hart van Friesland.'),
('Heerenveen', 'heerenveen', 6, 'Charmante hotels met jacuzzi in Heerenveen. Friese gastvrijheid en moderne wellness.'),
('Groningen', 'groningen-stad', 10, 'Hotels met jacuzzi in Groningen stad. Levendige universiteitstad met moderne wellness faciliteiten.'),
('Schoorl', 'schoorl', 1, 'Natuurlijke rust en jacuzzi hotels in Schoorl. Nabij duinen en zee.'),
('Drachten', 'drachten', 6, 'Hotels met jacuzzi in Drachten. Friese charme en moderne comfort.'),
('Oudeschoot', 'oudeschoot', 6, 'Landelijke hotels met jacuzzi in Oudeschoot. Rust en ontspanning in de Friese natuur.'),
('Berg en Dal', 'berg-en-dal', 4, 'Hotels met jacuzzi in Berg en Dal. Heuvelachtig landschap en wellness faciliteiten.'),
('Assen', 'assen', 7, 'Hotels met jacuzzi in Assen. Hoofdstad van Drenthe met moderne accommodaties.'),
('Renesse', 'renesse', 11, 'Strandparadijs Renesse met luxe hotels met jacuzzi. Combineer zee, strand en wellness voor de perfecte vakantie.'),
('Middelburg', 'middelburg', 11, 'Historische hoofdstad van Zeeland met charmante hotels met jacuzzi. Ontdek de rijke geschiedenis en ontspan in stijl.'),
('Goes', 'goes', 11, 'Gezellige Zeeuwse stad Goes met comfort en wellness. Hotels met jacuzzi in een authentieke omgeving.');

INSERT INTO hotels (name, slug, description, province_id, city_id, price_range, facilities, affiliate_link, image_url, rating) VALUES
('Canal View Suite', 'canal-view-suite', 'Luxe suite met privé jacuzzi en uitzicht op de grachten. Perfect voor een romantisch weekend in Amsterdam.', 1, 1, 'Vanaf €199 / nacht', '["Privé jacuzzi", "Grachtenzicht", "Minibar", "Room service"]', 'https://booking.com/canal-view-suite', 'https://images.unsplash.com/photo-1559599238-0e285972db5b?q=80&w=1200&auto=format&fit=crop', 4.6),
('Boutique Spa Hotel', 'boutique-spa-hotel', 'Intiem boutique hotel met uitgebreide spa faciliteiten en jacuzzi. Gelegen in het hart van Amsterdam.', 1, 1, 'Vanaf €179 / nacht', '["Spa & sauna", "Jacuzzi", "Massage", "Wellness"]', 'https://booking.com/boutique-spa', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop', 4.5),
('Design Loft Spa', 'design-loft-spa', 'Moderne design loft met privé jacuzzi en panoramisch uitzicht over de stad. Unieke accommodatie in Amsterdam.', 1, 1, 'Vanaf €289 / nacht', '["Privé jacuzzi", "Stadszicht", "Design interieur", "Terras"]', 'https://booking.com/design-loft', 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop', 4.8),
('Valkenburg Wellness Hotel', 'valkenburg-wellness-hotel', 'Romantisch hotel in Valkenburg met uitgebreide wellness faciliteiten en jacuzzi. Perfect voor ontspanning.', 5, 7, 'Vanaf €149 / nacht', '["Wellness", "Jacuzzi", "Sauna", "Massage"]', 'https://booking.com/valkenburg-wellness', 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop', 4.4),
('Waterside Boutique Lodge', 'waterside-boutique-lodge', 'Luxe lodge met privé jacuzzi aan het water. Unieke accommodatie in een prachtige omgeving.', 1, 1, 'Vanaf €239 / nacht', '["Privé jacuzzi", "Waterzicht", "Boutique", "Romantisch"]', 'https://booking.com/waterside-lodge', 'https://images.unsplash.com/photo-1554188248-986adbb73be2?q=80&w=1200&auto=format&fit=crop', 4.8),
('City Spa Hotel', 'city-spa-hotel', 'Modern hotel met spa faciliteiten en jacuzzi. Gelegen in het centrum van de stad.', 2, 3, 'Vanaf €119 / nacht', '["Spa faciliteiten", "Jacuzzi", "Fitness", "Restaurant"]', 'https://booking.com/city-spa', 'https://images.unsplash.com/photo-1521401292936-0a2129a30b22?q=80&w=1200&auto=format&fit=crop', 4.2),

-- Van der Valk Hotels
('Van der Valk Apeldoorn - de Cantharel', 'van-der-valk-apeldoorn-de-cantharel', 'Luxe Van der Valk hotel in Apeldoorn met uitgebreide wellness faciliteiten en jacuzzi. Gelegen nabij De Hoge Veluwe en Paleis Het Loo.', 4, 8, 'Vanaf €159 / nacht', '["Wellness & Spa", "Jacuzzi", "Restaurant", "Fitness", "Gratis WiFi", "Parkeren"]', 'https://booking.com/vandervalk-apeldoorn', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop', 4.3),

('Van der Valk Schiphol', 'van-der-valk-schiphol', 'Modern Van der Valk hotel bij Schiphol met luxe spa en jacuzzi faciliteiten. Perfect voor zakenreizigers en vakantiegangers.', 1, 9, 'Vanaf €189 / nacht', '["Airport shuttle", "Spa & Wellness", "Jacuzzi", "24/7 service", "Restaurant", "Fitness"]', 'https://booking.com/vandervalk-schiphol', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', 4.4),

('Van der Valk Wolvega - Heerenveen', 'van-der-valk-wolvega-heerenveen', 'Gastvrij Van der Valk hotel tussen Wolvega en Heerenveen met wellness centrum en jacuzzi. Friese gastvrijheid op z''n best.', 6, 10, 'Vanaf €139 / nacht', '["Wellness centrum", "Jacuzzi", "Sauna", "Restaurant", "Gratis WiFi", "Fietsroutes"]', 'https://booking.com/vandervalk-wolvega', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', 4.2),

('Van der Valk Hoogkerk', 'van-der-valk-hoogkerk', 'Stijlvol Van der Valk hotel in Hoogkerk nabij Groningen met moderne spa faciliteiten en jacuzzi. Perfecte uitvalsbasis voor Noord-Nederland.', 10, 12, 'Vanaf €149 / nacht', '["Spa faciliteiten", "Jacuzzi", "Restaurant", "Bar", "Vergaderzalen", "Gratis parkeren"]', 'https://booking.com/vandervalk-hoogkerk', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', 4.3),

('Van der Valk Assen', 'van-der-valk-assen', 'Comfortabel Van der Valk hotel in Assen met wellness faciliteiten en jacuzzi. Ideaal gelegen in de hoofdstad van Drenthe.', 7, 16, 'Vanaf €135 / nacht', '["Wellness", "Jacuzzi", "Sauna", "Restaurant", "Fitness", "Gratis WiFi"]', 'https://booking.com/vandervalk-assen', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', 4.2),

-- Fletcher Hotels
('Fletcher Hotel-Restaurant Jan Van Scorel', 'fletcher-jan-van-scorel', 'Karakteristiek Fletcher hotel in Schoorl met wellness faciliteiten en jacuzzi. Gelegen nabij de duinen en het strand.', 1, 13, 'Vanaf €125 / nacht', '["Wellness", "Jacuzzi", "Restaurant", "Nabij strand", "Fietsroutes", "Gratis WiFi"]', 'https://booking.com/fletcher-janvanschorel', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', 4.1),

('Fletcher Hotel-Restaurant De Zeegser Duinen', 'fletcher-de-zeegser-duinen', 'Rustig Fletcher hotel in Drachten met spa faciliteiten en jacuzzi. Perfecte uitvalsbasis voor het ontdekken van Friesland.', 6, 14, 'Vanaf €119 / nacht', '["Spa", "Jacuzzi", "Restaurant", "Natuur", "Fietsverhuur", "Gratis parkeren"]', 'https://booking.com/fletcher-zeegserduinen', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop', 4.0),

('Fletcher Hotel-Restaurant Koogerend', 'fletcher-koogerend', 'Landelijk Fletcher hotel in Oudeschoot met wellness centrum en jacuzzi. Rust en ontspanning in de Friese natuur.', 6, 15, 'Vanaf €115 / nacht', '["Wellness centrum", "Jacuzzi", "Restaurant", "Landelijke ligging", "Wandelroutes", "Gratis WiFi"]', 'https://booking.com/fletcher-koogerend', 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop', 4.1),

('Fletcher Parkhotel Val Monte', 'fletcher-parkhotel-val-monte', 'Luxe Fletcher parkhotel in Berg en Dal met uitgebreide spa en jacuzzi. Gelegen in het heuvelachtige landschap van Gelderland.', 4, 15, 'Vanaf €165 / nacht', '["Parkhotel", "Spa & Wellness", "Jacuzzi", "Restaurant", "Heuvelachtig", "Golf nabij"]', 'https://booking.com/fletcher-valmonte', 'https://images.unsplash.com/photo-1554188248-986adbb73be2?q=80&w=1200&auto=format&fit=crop', 4.4),

-- Kasteel Bloemendal
('Kasteel Bloemendal', 'kasteel-bloemendal', 'Historisch kasteel hotel met luxe spa faciliteiten en jacuzzi. Romantische omgeving in een authentiek kasteel met moderne wellness.', 5, 7, 'Vanaf €225 / nacht', '["Kasteel", "Spa & Wellness", "Jacuzzi", "Fine dining", "Historisch", "Luxe kamers"]', 'https://booking.com/kasteel-bloemendal', 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop', 4.6),

-- Zeeland Hotels
('Landgoed Hotel Renesse', 'landgoed-hotel-renesse', 'Luxe landgoedhotel in Renesse met uitgebreide spa faciliteiten en jacuzzi. Perfect voor een ontspannen strandvakantie met wellness.', 11, 17, 'Vanaf €169 / nacht', '["Spa & Wellness", "Jacuzzi", "Strand nabij", "Landgoed", "Fine dining", "Natuur"]', 'https://booking.com/landgoed-hotel-renesse', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', 4.5),
('Zuiderduin Beachhotel', 'zuiderduin-beachhotel', 'Uniek strandhotel in Zeeland met spectaculaire jacuzzi faciliteiten en direct toegang tot het strand. Luxe en natuur in perfect harmonie.', 11, 17, 'Vanaf €195 / nacht', '["Strand access", "Jacuzzi", "Zee uitzicht", "Wellness center", "Restaurant", "Thalasso"]', 'https://booking.com/zuiderduin-beachhotel', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', 4.7),
('Van der Valk Middelburg', 'van-der-valk-middelburg', 'Stijlvol Van der Valk hotel in het historische Middelburg met moderne spa en jacuzzi faciliteiten. Perfecte combinatie van cultuur en ontspanning.', 11, 18, 'Vanaf €149 / nacht', '["Spa faciliteiten", "Jacuzzi", "Historisch centrum", "Restaurant", "Bar", "Gratis parkeren"]', 'https://booking.com/vandervalk-middelburg', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', 4.4),
('Van der Valk Goes', 'van-der-valk-goes', 'Comfortabel Van der Valk hotel in Goes met uitstekende wellness faciliteiten en jacuzzi. Ideale uitvalsbasis voor het ontdekken van Zeeland.', 11, 19, 'Vanaf €139 / nacht', '["Wellness", "Jacuzzi", "Sauna", "Restaurant", "Fitness", "Gratis WiFi"]', 'https://booking.com/vandervalk-goes', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', 4.3);

-- Insert sample hotel rooms data
INSERT INTO hotel_rooms (hotel_id, name, description, price_range, image_url, features) VALUES
-- Boutique Spa Hotel rooms
(2, 'Deluxe Suite met Jacuzzi', 'Ruime suite met privé jacuzzi, woonkamer en luxe badkamer. Perfect voor een romantisch verblijf.', 'Vanaf €179 / nacht', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', '["Privé jacuzzi", "Separate woonkamer", "Luxe badkamer", "Balkon"]'),
(2, 'Premium Wellness Suite', 'Exclusieve suite met grote jacuzzi, sauna en relaxruimte. De ultieme wellness ervaring.', 'Vanaf €249 / nacht', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', '["Grote jacuzzi", "Privé sauna", "Relaxruimte", "Champagne service"]'),

-- Canal View Suite rooms
(1, 'Grachten Suite', 'Elegante suite met panoramisch grachtenzicht en jacuzzi. Authentiek Amsterdam gevoel.', 'Vanaf €199 / nacht', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', '["Grachtenzicht", "Privé jacuzzi", "Historisch interieur", "Minibar"]'),
(1, 'Royal Canal Suite', 'Koninklijke suite met extra grote jacuzzi en 180-graden grachtenzicht. Voor de meest veeleisende gasten.', 'Vanaf €289 / nacht', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', '["Panorama grachtenzicht", "Extra grote jacuzzi", "Butler service", "Luxe amenities"]'),

-- Design Loft Spa rooms  
(3, 'Modern Loft Suite', 'Stijlvolle loft met design jacuzzi en skyline zicht. Voor de moderne reiziger.', 'Vanaf €289 / nacht', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', '["Design jacuzzi", "Skyline zicht", "Modern interieur", "Eigen terras"]'),
(3, 'Penthouse Spa Loft', 'Exclusieve penthouse met XXL jacuzzi en 360-graden stadszicht. Onvergetelijke ervaring.', 'Vanaf €399 / nacht', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop', '["XXL jacuzzi", "360-graden zicht", "Privé lift", "Concierge service"]'),

-- Van der Valk Apeldoorn rooms (hotel_id = 7)
(7, 'Comfort Kamer met Jacuzzi', 'Ruime comfort kamer met privé jacuzzi en uitzicht op het park. Perfect voor een ontspannen verblijf.', 'Vanaf €159 / nacht', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', '["Privé jacuzzi", "Parkzicht", "Airco", "Minibar"]'),
(7, 'Suite De Cantharel', 'Luxe suite met grote jacuzzi en separate woonkamer. De ultieme Van der Valk ervaring.', 'Vanaf €229 / nacht', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', '["Grote jacuzzi", "Separate woonkamer", "Luxe badkamer", "VIP service"]'),

-- Van der Valk Schiphol rooms (hotel_id = 8)
(8, 'Business Kamer met Jacuzzi', 'Moderne business kamer met jacuzzi, perfect voor de zakenreiziger die wil ontspannen.', 'Vanaf €189 / nacht', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Werkplek", "Airport shuttle", "24/7 room service"]'),
(8, 'Airport Suite', 'Ruime suite met jacuzzi en skyline zicht. Luxe verblijf nabij Schiphol.', 'Vanaf €269 / nacht', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Skyline zicht", "VIP lounge", "Airport shuttle"]'),

-- Van der Valk Wolvega rooms (hotel_id = 9)
(9, 'Friese Kamer met Jacuzzi', 'Gezellige kamer met jacuzzi en Friese charme. Perfecte uitvalsbasis voor Friesland.', 'Vanaf €139 / nacht', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Friese sfeer", "Gratis WiFi", "Fietsroutes info"]'),
(9, 'Wellness Suite Friesland', 'Ruime wellness suite met grote jacuzzi en sauna. De perfecte Friese wellness ervaring.', 'Vanaf €199 / nacht', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', '["Grote jacuzzi", "Privé sauna", "Wellness amenities", "Landelijk zicht"]'),

-- Van der Valk Hoogkerk rooms (hotel_id = 10)
(10, 'Groningen Kamer met Jacuzzi', 'Moderne kamer met jacuzzi, ideaal gelegen tussen Groningen stad en natuur.', 'Vanaf €149 / nacht', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Moderne inrichting", "Gratis parkeren", "Stadsverbinding"]'),
(10, 'Business Suite Hoogkerk', 'Ruime business suite met jacuzzi en vergaderfaciliteiten. Perfect voor zakelijk verblijf.', 'Vanaf €219 / nacht', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Vergaderruimte", "Business center", "Gratis WiFi"]'),

-- Van der Valk Assen rooms (hotel_id = 11)
(11, 'Drenthe Kamer met Jacuzzi', 'Comfortabele kamer met jacuzzi in de hoofdstad van Drenthe. Perfecte uitvalsbasis voor natuur.', 'Vanaf €135 / nacht', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Natuurzicht", "Comfortabel", "Gratis WiFi"]'),
(11, 'Familie Suite Assen', 'Ruime familie suite met jacuzzi, perfect voor een familie weekend in Drenthe.', 'Vanaf €195 / nacht', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', '["Familie jacuzzi", "Separate kinderkamer", "Familie faciliteiten", "Natuur activiteiten"]'),

-- Fletcher Jan Van Scorel rooms (hotel_id = 12)
(12, 'Duinkamer met Jacuzzi', 'Sfeervolle kamer met jacuzzi en zicht op de duinen. Nabij strand en natuur.', 'Vanaf €125 / nacht', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Duinzicht", "Nabij strand", "Fietsroutes"]'),
(12, 'Wellness Suite Schoorl', 'Luxe wellness suite met grote jacuzzi en directe toegang tot het terras.', 'Vanaf €185 / nacht', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', '["Grote jacuzzi", "Privé terras", "Wellness pakket", "Strandtoegang"]'),

-- Fletcher De Zeegser Duinen rooms (hotel_id = 13)
(13, 'Natuur Kamer met Jacuzzi', 'Rustige kamer met jacuzzi te midden van de Friese natuur. Perfect voor ontspanning.', 'Vanaf €119 / nacht', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Natuurzicht", "Rust & ruimte", "Gratis parkeren"]'),
(13, 'Familie Suite Drachten', 'Gezellige familie suite met jacuzzi, ideaal voor families die Friesland willen ontdekken.', 'Vanaf €169 / nacht', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop', '["Familie jacuzzi", "Kindvriendelijk", "Fietsverhuur", "Natuur activiteiten"]'),

-- Fletcher Koogerend rooms (hotel_id = 14)
(14, 'Landelijke Kamer met Jacuzzi', 'Charmante landelijke kamer met jacuzzi in het hart van Friesland.', 'Vanaf €115 / nacht', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Landelijke charme", "Wandelroutes", "Gratis WiFi"]'),
(14, 'Boerderij Suite', 'Authentieke boerderij suite met jacuzzi en uitzicht op de weilanden.', 'Vanaf €165 / nacht', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', '["Rustieke jacuzzi", "Weidezicht", "Authentiek", "Rust & ruimte"]'),

-- Fletcher Val Monte rooms (hotel_id = 15)
(15, 'Parkhotel Kamer met Jacuzzi', 'Elegante parkhotel kamer met jacuzzi en zicht op het heuvellandschap.', 'Vanaf €165 / nacht', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Heuvelzicht", "Parkhotel sfeer", "Golf nabij"]'),
(15, 'Monte Suite', 'Luxe suite met panoramische jacuzzi en spectaculair uitzicht over de heuvels van Berg en Dal.', 'Vanaf €245 / nacht', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', '["Panorama jacuzzi", "Heuvelzicht", "Luxe amenities", "Golf package"]'),

-- Kasteel Bloemendal rooms (hotel_id = 16)
(16, 'Kasteel Kamer met Jacuzzi', 'Historische kasteel kamer met moderne jacuzzi. Romantiek en geschiedenis in harmonie.', 'Vanaf €225 / nacht', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', '["Historische jacuzzi", "Kasteel sfeer", "Antiek interieur", "Fine dining"]'),
(16, 'Koninklijke Suite', 'Exclusieve koninklijke suite met luxe jacuzzi en kasteeltuin zicht. De ultieme kasteel ervaring.', 'Vanaf €399 / nacht', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop', '["Luxe jacuzzi", "Kasteeltuin zicht", "Butler service", "Historische grandeur"]'),

-- Landgoed Hotel Renesse rooms (hotel_id = 17)
(17, 'Landgoed Kamer met Jacuzzi', 'Elegante landgoed kamer met jacuzzi en zicht op de tuinen. Luxe en rust in één.', 'Vanaf €169 / nacht', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Tuinzicht", "Landgoed sfeer", "Gratis WiFi"]'),
(17, 'Landgoed Suite', 'Ruime landgoed suite met luxe jacuzzi en privé terras. Perfect voor een romantisch verblijf aan zee.', 'Vanaf €249 / nacht', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', '["Luxe jacuzzi", "Privé terras", "Strand nabij", "Spa toegang"]'),

-- Zuiderduin Beachhotel rooms (hotel_id = 18)
(18, 'Zeezicht Kamer met Jacuzzi', 'Spectaculaire kamer met jacuzzi en direct uitzicht op de zee. Wake up to the waves.', 'Vanaf €195 / nacht', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Zeezicht", "Balkon", "Strand access"]'),
(18, 'Beach Suite', 'Luxe beach suite met panoramische jacuzzi en privé strandtoegang. De ultieme kust ervaring.', 'Vanaf €329 / nacht', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop', '["Panorama jacuzzi", "Privé strand", "Zee uitzicht", "Thalasso spa"]'),

-- Van der Valk Middelburg rooms (hotel_id = 19)
(19, 'Middelburg Kamer met Jacuzzi', 'Stijlvolle kamer met jacuzzi in het hart van historisch Middelburg. Cultuur en comfort.', 'Vanaf €149 / nacht', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Historisch centrum", "Comfortabel", "Gratis WiFi"]'),
(19, 'Heritage Suite', 'Luxe heritage suite met jacuzzi en zicht op de historische binnenstad. Geschiedenis en wellness.', 'Vanaf €229 / nacht', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', '["Heritage jacuzzi", "Stadzicht", "Historische sfeer", "Premium lokatie"]'),

-- Van der Valk Goes rooms (hotel_id = 20)
(20, 'Goes Kamer met Jacuzzi', 'Comfortabele kamer met jacuzzi in het centrum van Goes. Perfecte uitvalsbasis voor Zeeland.', 'Vanaf €139 / nacht', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', '["Jacuzzi", "Centrum Goes", "Comfortabel", "Gratis WiFi"]'),
(20, 'Zeeuws Suite', 'Ruime Zeeuwse suite met jacuzzi en authentieke charme. Ontdek de echte Zeeuwse gastvrijheid.', 'Vanaf €199 / nacht', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop', '["Zeeuwse jacuzzi", "Authentieke charme", "Ruim", "Lokale sfeer"]');

-- Add latitude and longitude to cities table
ALTER TABLE cities ADD COLUMN IF NOT EXISTS latitude DECIMAL(10, 8);
ALTER TABLE cities ADD COLUMN IF NOT EXISTS longitude DECIMAL(11, 8);

-- Update sample data for cities with lat/lng
UPDATE cities SET latitude = 52.3676, longitude = 4.9041 WHERE slug = 'amsterdam';
UPDATE cities SET latitude = 52.3874, longitude = 4.6462 WHERE slug = 'haarlem';
UPDATE cities SET latitude = 51.9225, longitude = 4.4792 WHERE slug = 'rotterdam';
UPDATE cities SET latitude = 52.0705, longitude = 4.3007 WHERE slug = 'den-haag';
UPDATE cities SET latitude = 52.0907, longitude = 5.1214 WHERE slug = 'utrecht';
UPDATE cities SET latitude = 51.9851, longitude = 5.9148 WHERE slug = 'arnhem';
UPDATE cities SET latitude = 50.8514, longitude = 5.6910 WHERE slug = 'maastricht';
UPDATE cities SET latitude = 52.2110, longitude = 5.9699 WHERE slug = 'apeldoorn';
UPDATE cities SET latitude = 52.3086, longitude = 4.7639 WHERE slug = 'schiphol';
UPDATE cities SET latitude = 52.8656, longitude = 5.9343 WHERE slug = 'wolvega';
UPDATE cities SET latitude = 52.9591, longitude = 5.9316 WHERE slug = 'heerenveen';
UPDATE cities SET latitude = 53.2194, longitude = 6.5665 WHERE slug = 'groningen-stad';
UPDATE cities SET latitude = 52.6954, longitude = 4.6881 WHERE slug = 'schoorl';
UPDATE cities SET latitude = 52.9325, longitude = 6.0998 WHERE slug = 'drachten';
UPDATE cities SET latitude = 52.9744, longitude = 5.8689 WHERE slug = 'oudeschoot';
UPDATE cities SET latitude = 51.8174, longitude = 5.9139 WHERE slug = 'berg-en-dal';
UPDATE cities SET latitude = 52.9925, longitude = 6.5649 WHERE slug = 'assen';
UPDATE cities SET latitude = 51.7131, longitude = 3.9305 WHERE slug = 'renesse';
UPDATE cities SET latitude = 51.4988, longitude = 3.6109 WHERE slug = 'middelburg';
UPDATE cities SET latitude = 51.5042, longitude = 3.8884 WHERE slug = 'goes';
