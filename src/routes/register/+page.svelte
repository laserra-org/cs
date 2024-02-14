<script>
    import { goto } from "$app/navigation";
    import { API_URL } from "$lib/config";
    import { Label, Input, Button, Icon } from "$lib/components/atoms";
  
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const jwtCookie = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("jwt="));
      if (jwtCookie) {
        goto("/");
      }
    }
  
    let username = "";
    let password = "";
  
    async function handleSubmit() {
      let req = "username=" + username + "&password=" + password;
      try {
        // Send a POST request to your authentication backend to obtain a JWT token
        const response = await fetch(API_URL + "/users/auth/jwt/login", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          //body: JSON.stringify({ username, password }),
          body: req.toString(),
        });
  
        if (response.ok) {
          const data = await response.json();
          // Store the JWT token in a cookie
          document.cookie = `jwt=${data.access_token}; path=/`;
          // Redirect the user to a protected route
          // You can use the router to navigate to the protected route
          // import { goto } from '$app/navigation';
          console.log("login OK!");
          goto("/");
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  </script>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div
      class="w-96 p-6 m-auto bg-white text-neutral-700 rounded-md shadow-md lg:max-w-lg"
    >
    <div><a href="/"><Icon name="home" color="fill-neutral" size="32" /></a
        ></div>
      <h1 class="text-3xl font-semibold text-center">Registrati</h1>
      <form class="space-y-4 text-neutral-700" on:submit={handleSubmit}>
        <div>
          <Label for="email">Email</Label>
          <Input type="text" placeholder="Email Address" bind:value={username} />
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
  