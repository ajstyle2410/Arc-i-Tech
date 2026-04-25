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
('50+', 'Projects Delivered', 'Rocket'),
('100+', 'Happy Clients', 'HeartHandshake'),
('5+', 'Years Experience', 'ShieldCheck'),
('10', 'Expert Services', 'Zap');

INSERT INTO public.services (id, title, description, icon_name, color, bg_color, display_order) VALUES
('website-development', 'Website Development', 'Modern, responsive websites that engage and convert your audience.', 'Globe', '#6366f1', 'rgba(99,102,241,0.1)', 1),
('software-development', 'Desktop Applications', 'Powerful cross-platform desktop apps built for performance.', 'Code2', '#8b5cf6', 'rgba(139,92,246,0.1)', 2),
('mobile-apps', 'Android Applications', 'Native Android apps providing seamless mobile experiences.', 'Smartphone', '#06b6d4', 'rgba(6,182,212,0.1)', 3),
('consulting', 'Software Consulting', 'Expert strategic guidance for your technology initiatives.', 'BrainCircuit', '#f59e0b', 'rgba(245,158,11,0.1)', 4),
('engineering-projects', 'Engineering Projects', 'Complete support for final year and academic projects.', 'GraduationCap', '#10b981', 'rgba(16,185,129,0.1)', 5),
('mentorship', 'Project Mentorship', 'One-on-one guidance throughout your entire project journey.', 'Lightbulb', '#f43f5e', 'rgba(244,63,94,0.1)', 6),
('interviews', 'Mock Interviews', 'Realistic interview prep with industry professionals.', 'Users', '#6366f1', 'rgba(99,102,241,0.1)', 7),
('internship', 'Internship (Certificates)', 'Hands-on internships with real projects and certificates.', 'ClipboardCheck', '#8b5cf6', 'rgba(139,92,246,0.1)', 8),
('tutoring', 'Technical Competency', 'Structured programs to build in-demand tech skills.', 'BookOpen', '#06b6d4', 'rgba(6,182,212,0.1)', 9),
('mock-tests', 'Mock Tests', 'Comprehensive tests to assess and sharpen your knowledge.', 'ClipboardCheck', '#10b981', 'rgba(16,185,129,0.1)', 10);

INSERT INTO public.testimonials (name, role, text, rating) VALUES
('Priya Sharma', 'CEO, FinEdge Pvt Ltd', 'Arc-i-Tech transformed our business with a stunning website and mobile app. Their team is professional, responsive, and delivered beyond our expectations.', 5),
('Rahul Mehta', 'Final Year Student, VIT', 'The project mentorship program was incredibly helpful. My final year project was a huge success thanks to their expert guidance and hands-on support.', 5),
('Anita Desai', 'HR Manager, TechCorp', 'We hired several interns through Arc-i-Tech''s program. They came in with solid skills and great work ethics. Highly recommended!', 5);
