-- Индексы для ускорения личного кабинета, расписания и проверки абонементов.
-- Запусти в Supabase: SQL Editor → New query → Run.

create index if not exists profiles_id_idx
on public.profiles(id);

create index if not exists membership_orders_user_id_idx
on public.membership_orders(user_id);

create index if not exists membership_orders_user_status_created_at_idx
on public.membership_orders(user_id, status, created_at desc);

create index if not exists class_bookings_user_id_idx
on public.class_bookings(user_id);

create index if not exists class_bookings_class_id_idx
on public.class_bookings(class_id);

create index if not exists classes_date_idx
on public.classes(date);

create index if not exists classes_date_start_time_idx
on public.classes(date, start_time);
