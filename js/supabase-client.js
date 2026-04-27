// Единый Supabase-клиент без глобальных const, чтобы не было ошибки
// "Identifier 'SUPABASE_URL' has already been declared" при подключении нескольких скриптов.
(function () {
  const url = 'https://tphqdjeordubhobwoouo.supabase.co';
  const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHFkamVvcmR1YmhvYndvb3VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NzI2OTcsImV4cCI6MjA5MjM0ODY5N30.yAGVQnL4g5Eqex0PEJm3fGtoqyYaf3eA070FaelF2Hw';

  if (!window.supabase) {
    console.error('Supabase SDK не загружен');
    return;
  }

  window.supabaseClient = window.supabaseClient || window.supabase.createClient(url, anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  });
})();
