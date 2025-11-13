-- Add assignee, due_date, priority, and status fields to admin_documents
ALTER TABLE public.admin_documents 
ADD COLUMN assignee TEXT,
ADD COLUMN due_date DATE,
ADD COLUMN priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
ADD COLUMN status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed', 'blocked'));

-- Add index for filtering
CREATE INDEX idx_admin_documents_due_date ON public.admin_documents(due_date);
CREATE INDEX idx_admin_documents_status ON public.admin_documents(status);
CREATE INDEX idx_admin_documents_priority ON public.admin_documents(priority);