import Header from 'src/components/header';
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container py-3">{children}</main>
    </div>
  );
};

export default MainLayout;
