import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main style={{ color: "#232129", padding: "96px", fontFamily: "-apple-system, Roboto, sans-serif, serif" }}>
      <h1 style={{ marginTop: 0, marginBottom: 64, maxWidth: 320 }}>Page not found</h1>
      <p style={{ marginBottom: 48 }}>
        Sorry we couldn't find what you were looking for.
        <br />
        <br />
        <Link href="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
