<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="shortcut icon" href="light.ico" type="image/x-icon">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

<link rel="canonical" href="https://amitdhakal2025.com.np/" />
<meta name="description" content="Explore the professional portfolio of Amit Dhakal, a passionate full-stack web developer skilled in Laravel, React, JavaScript, and modern web technologies." />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="Amit Dhakal, Full-Stack Developer, Web Developer, Laravel Developer, React Developer, JavaScript, TypeScript, PHP, Tailwind CSS, Frontend, Backend, InertiaJS, API Development, Portfolio, herojk64" />
<meta name="author" content="Amit Dhakal" />
<meta property="og:title" content="Amit Dhakal | Full-Stack Web Developer" />
<meta property="og:description" content="Discover the work and projects of Amit Dhakal, a skilled full-stack developer specializing in building modern, high-performance web applications." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://amitdhakal2025.com.np" />
<meta property="og:image" content="https://amitdhakal2025.com.np/thumbnail.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Amit Dhakal | Full-Stack Web Developer" />
<meta name="twitter:description" content="Professional portfolio of Amit Dhakal. Expert in Laravel, React, and modern web technologies." />
<meta name="twitter:image" content="https://amitdhakal2025.com.np/thumbnail.png" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
