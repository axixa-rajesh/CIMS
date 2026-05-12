-- Test
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

-- test_questions

INSERT INTO test_questions (
  id,
  test_id,
  question_text,
  question_type,
  marks
)
VALUES (
  UUID(),
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'What is 2 + 2?',
  'MCQ',
  5
);

-- test_attempts

INSERT INTO test_attempts (
  id,
  test_id,
  student_id,
  started_at,
  submitted_at,
  obtained_marks,
  status
)
VALUES (
  UUID(),
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  NOW(),
  NOW(),
  80,
  'SUBMITTED'
);

-- results

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

-- notices

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
  DATE_ADD(NOW(), INTERVAL 7 DAY),
  '33333333-3333-3333-3333-333333333333',
  'ACTIVE'
);

-- notice targets

INSERT INTO notice_targets (
  id,
  notice_id,
  target_type,
  target_id
)
VALUES (
  UUID(),
  '77777777-7777-7777-7777-777777777777',
  'BATCH',
  '11111111-1111-1111-1111-111111111111'
);


-- notification

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

-- doubt ticket

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

-- ticket messages

INSERT INTO ticket_messages (
  id,
  ticket_id,
  sender_user_id,
  message_text
)
VALUES (
  UUID(),
  '99999999-9999-9999-9999-999999999999',
  '66666666-6666-6666-6666-666666666666',
  'Please explain question number 5 properly.'
);