import { Container, Header } from "@/components";

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
