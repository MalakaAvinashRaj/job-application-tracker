-- Job Application Tracker Schema
-- Generated from ERD provided by user

-- Table: profiles
CREATE TABLE IF NOT EXISTS profiles (
    id uuid PRIMARY KEY REFERENCES auth.users(id),
    email text,
    full_name text,
    avatar_url text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Table: job_applications
CREATE TABLE IF NOT EXISTS job_applications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES profiles(id),
    job_title text,
    company_name text,
    job_description text,
    job_url text,
    status text,
    source text,
    applied_date timestamptz,
    last_updated timestamptz,
    notes text,
    salary_range text,
    location text,
    remote boolean,
    contact_info jsonb,
    is_favorite boolean,
    external_job_id text
);

-- Table: application_status_history
CREATE TABLE IF NOT EXISTS application_status_history (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id uuid REFERENCES job_applications(id),
    status text,
    notes text,
    created_at timestamptz DEFAULT now()
);

-- Table: application_emails
CREATE TABLE IF NOT EXISTS application_emails (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES profiles(id),
    application_id uuid REFERENCES job_applications(id),
    email_id text,
    subject text,
    sender text,
    received_at timestamptz,
    content text,
    category text,
    is_processed boolean,
    metadata jsonb,
    created_at timestamptz DEFAULT now()
);

-- Table: email_integrations
CREATE TABLE IF NOT EXISTS email_integrations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES profiles(id),
    provider text,
    credentials jsonb,
    is_active boolean,
    last_sync timestamptz,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    last_email_id text,
    sync_frequency text,
    filters jsonb
);

-- Table: platform_integrations
CREATE TABLE IF NOT EXISTS platform_integrations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES profiles(id),
    platform text,
    credentials jsonb,
    is_active boolean,
    last_sync timestamptz,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
); 