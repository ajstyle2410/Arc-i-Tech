-- 1. Create Services Table
CREATE TABLE public.services (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  icon_name VARCHAR(50),
  color VARCHAR(20),
  bg_color VARCHAR(30),
  display_order INT DEFAULT 0
);

-- 2. Create Stats Table
CREATE TABLE public.stats (
  id SERIAL PRIMARY KEY,
  value VARCHAR(20) NOT NULL,
  label VARCHAR(100) NOT NULL,
  icon_name VARCHAR(50)
);

-- 3. Create Testimonials Table
CREATE TABLE public.testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100),
  text TEXT NOT NULL,
  rating INT DEFAULT 5
);

-- 4. Create Contact Messages Table
CREATE TABLE public.contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ENABLE ROW LEVEL SECURITY (Optional but recommended)
-- By default, allowing anon read access to content tables, and anon insert to contact_messages
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read-only access to services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to stats" ON public.stats FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to testimonials" ON public.testimonials FOR SELECT USING (true);

-- Allow anyone to insert contact messages
CREATE POLICY "Allow anonymous to insert contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);


-- ==========================================
-- SEED DATA (Copying from existing static data)
-- ==========================================

INSERT INTO public.stats (value, label, icon_name) VALUES
('120+', 'Digital Products Launched', 'Rocket'),
('50+', 'Enterprise Clients', 'HeartHandshake'),
('10+', 'Years Engineering', 'ShieldCheck'),
('99%', 'On-Time Delivery', 'Zap');

INSERT INTO public.services (id, title, description, icon_name, color, bg_color, display_order) VALUES
('saas-incubation', 'SaaS Product Incubation', 'Transform your vision into a highly scalable SaaS platform. We handle everything from the initial database architecture and multi-tenant logic to front-end development, secure payment gateways, and automated CI/CD deployments. Perfect for startups and enterprises launching new subscription products.', 'Rocket', '#112d4e', 'rgba(17,45,78,0.1)', 1),
('enterprise-web', 'Enterprise Web Apps', 'We engineer secure, high-performance web applications tailored to streamline your complex business workflows. Utilizing robust modern frameworks (Angular, React, Spring Boot), we deliver responsive web portals equipped with deep analytics, real-time data sync, and enterprise-grade security.', 'Globe', '#3F72AF', 'rgba(63,114,175,0.1)', 2),
('mobile-development', 'Mobile App Engineering', 'Native and cross-platform (Flutter/React Native) mobile experiences engineered for maximum user engagement. We optimize apps for high frame rates, low battery consumption, and seamless offline synchronization so your product excels on both iOS and Android stores.', 'Smartphone', '#DBE2EF', 'rgba(219,226,239,0.5)', 3),
('cloud-architecture', 'Cloud Architecture & DevOps', 'Build a serverless or containerized foundation on AWS, GCP, or Azure. We design fault-tolerant, auto-scaling cloud architectures, coupled with comprehensive Kubernetes and Docker pipelines to ensure zero-downtime deployments and rapid iterative development.', 'Server', '#112d4e', 'rgba(17,45,78,0.1)', 4),
('ux-ui', 'UI/UX Engineering', 'Data-driven user experiences and interface designs that decisively increase user retention and conversion. Our design team blends behavioral psychology with crisp, modern aesthetics to deliver intuitive user layouts, interactive prototypes, and comprehensive design systems.', 'Lightbulb', '#3F72AF', 'rgba(63,114,175,0.1)', 5),
('api-integration', 'API & Microservices', 'We design robust, RESTful, and GraphQL APIs to seamlessly connect your digital ecosystem. Whether you need to decompose a monolith into scalable microservices or integrate with legacy third-party CRM and ERP databases, we ensure flawless data communication.', 'Code2', '#112d4e', 'rgba(17,45,78,0.1)', 6),
('ai-ml-solutions', 'AI & Data Solutions', 'Incorporate intelligent data models into your application. From generative AI integrations, NLP chatbots, to predictive analytics engines, we help you leverage machine learning to automate operations and extract actionable insights from your data warehouse.', 'BrainCircuit', '#3F72AF', 'rgba(63,114,175,0.1)', 7),
('legacy-modernization', 'Legacy Modernization', 'Revitalize aging codebases without disrupting active business operations. We safely migrate legacy monolithic architectures into modern cloud-native frameworks, enhancing execution speeds, security posture, and overall maintainability for the future.', 'Database', '#DBE2EF', 'rgba(219,226,239,0.5)', 8);

INSERT INTO public.testimonials (name, role, text, rating) VALUES
('Sarah Jenkins', 'CTO, OmniTech Solutions', 'Arc-i-Tech developed our core SaaS product from scratch. Their engineering rigor and communication throughout the project was outstanding. We hit our launch deadline perfectly.', 5),
('David Chen', 'Founder, CloudSync', 'The team at Arc-i-Tech doesn''t just write code; they think about product strategy. They helped us avoid massive technical debt right from the architecture phase.', 5),
('Elena Rodriguez', 'VP of Product, FinServe', 'We partnered with Arc-i-Tech to modernize our legacy banking portal. The UI/UX overhaul and secure cloud migration completely transformed our customer experience.', 5);
