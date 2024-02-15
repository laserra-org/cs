<script>
  import { goto } from "$app/navigation";
  import { supabase } from "$lib/supabaseClient.js";
  import { Label, Input, Button, Icon } from "$lib/components/atoms";

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const jwtCookie = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("sb-access-token="));
    if (jwtCookie) {
      goto("/app");
    }
  }
  
  let loading = false;
  let email = "";
  let password = "";

  async function handleSubmit() {
    try {
      loading = true;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      ///document.cookie = `access_token=${data.session.access_token}; path=/`;
      ///goto("/app");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  }
  </script>


  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div
      class="w-96 p-6 m-auto bg-white text-neutral-700 rounded-md shadow-md lg:max-w-lg"
    >
    <div class="flex flex-row items-center">
      <a href="/"
        ><Icon name="chevron-left" color="fill-cyan-800" size="32" /></a
      >
      <div><a href="/">Torna alla Home</a></div>
    </div>
      <h1 class="text-3xl font-semibold text-center">Registrati</h1>
      <form class="space-y-4 text-neutral-700" on:submit={handleSubmit}>
        <div>
          <Label for="email">Email</Label>
          <Input type="text" placeholder="Email Address" bind:value={email} />
        </div>
        <div>
          <Label for="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter Password"
            bind:value={password}
          />
        </div>
        <!-- <a href="#" class="text-xs">Forgot your password?</a> -->
        <div class=float-right>
          <Button type="primary">Registrati</Button>
        </div>
      </form>
      <div class="pt-6 block text-sm">Hai già un account? <a href="/login">Login</a></div>
    </div>
  </div>
  