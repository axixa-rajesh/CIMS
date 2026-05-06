--Test
INSERT INTO tests (
  id,
  batch_id,
  subject_id,
  teacher_id,
  title,
  test_type,
  test_date,
  duration_minutes,
  max_marks,
  status
)
VALUES (
  UUID(),
  '11111111-1111-1111-1111-111111111111',
  '22222222-2222-2222-2222-222222222222',
  '33333333-3333-3333-3333-333333333333',
  'Math Test',
  'MCQ',
  '2026-05-10',
  60,
  100,
  'ACTIVE'
);

--results

INSERT INTO results(
  id,
  student_id,
  test_id,
  batch_id,
  total_marks,
  obtained_marks,
  percentage,
  grade,
  status
)
VALUES(
  UUID(),
  '11111111-1111-1111-1111-111111111111',
  '22222222-2222-2222-2222-222222222222',
  '33333333-3333-3333-3333-333333333333',
  100,
  85,
  85,
  'A',
  'PUBLISHED'
);

--notice

INSERT INTO notices (
  id,
  institute_id,
  branch_id,
  title,
  description,
  notice_type,
  publish_at,
  expiry_at,
  created_by_user_id,
  status
)
VALUES (
  UUID(),
  '11111111-1111-1111-1111-111111111111',
  '22222222-2222-2222-2222-222222222222',
  'Holiday Notice',
  'Institute will remain closed tomorrow',
  'GENERAL',
  NOW(),
  NOW(),
  '33333333-3333-3333-3333-333333333333',
  'ACTIVE'
);

--notification

INSERT INTO notifications (
  id,
  title,
  message,
  user_id,
  module_name,
  reference_id,
  is_read,
  status
)
VALUES (
  UUID(),
  'New Test',
  'Math test uploaded',
  '11111111-1111-1111-1111-111111111111',
  'TESTS',
  '22222222-2222-2222-2222-222222222222',
  false,
  'ACTIVE'
);

--doubt ticket

INSERT INTO doubt_tickets (
  id,
  student_id,
  subject_id,
  teacher_id,
  title,
  description,
  priority,
  ticket_status
)
VALUES (
  UUID(),
  '11111111-1111-1111-1111-111111111111',
  '22222222-2222-2222-2222-222222222222',
  '33333333-3333-3333-3333-333333333333',
  'Algebra Doubt',
  'Unable to solve equation',
  'HIGH',
  'OPEN'
);