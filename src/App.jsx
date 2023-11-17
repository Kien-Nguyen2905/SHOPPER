import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "./constants/pathname";
import "./assets/css/index.css";

import Loading from "./components/Loading/Loading";
import AccountPage from "./pages/AccountPage/AccountPage";
const AccountWishlist = lazy(() =>
  import("./pages/AccountPage/AccountWishlist")
);
const AccountAddress = lazy(() => import("./pages/AccountPage/AccountAddress"));
const AccountOrder = lazy(() => import("./pages/AccountPage/AccountOrder"));
const CheckoutSuccessPage = lazy(() =>
  import("./pages/CheckoutSuccessPage/CheckoutSuccessPage")
);
const MainLayout = lazy(() => import("./layout/MainLayout"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const FagPage = lazy(() => import("./pages/FagPage/FagPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage/PaymentPage"));
const PrivacyPage = lazy(() => import("./pages/Privacy/PrivacyPage"));
const ReturnPage = lazy(() => import("./pages/Return/ReturnPage"));
const ShippingPage = lazy(() => import("./pages/Shipping/ShippingPage"));
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const Page404 = lazy(() => import("./pages/Page404/Page404"));

function App() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.PRODUCT} element={<ProductPage />} />
          <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.FAG} element={<FagPage />} />
          <Route path={PATHS.PAYMENT} element={<PaymentPage />} />
          <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />
          <Route path={PATHS.RETURN} element={<ReturnPage />} />
          <Route path={PATHS.SHIPPING} element={<ShippingPage />} />
          <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
            <Route path={PATHS.CHECK_OUT} element={<CheckoutPage />} />
            <Route
              path={PATHS.CHECK_OUT_SUCCESS}
              element={<CheckoutSuccessPage />}
            />
            <Route path={PATHS.DASHBOARD.INDEX} element={<Dashboard />}>
              <Route index element={<AccountPage />}></Route>
              <Route
                path={PATHS.DASHBOARD.ORDER}
                element={<AccountOrder />}
              ></Route>
              <Route
                path={PATHS.DASHBOARD.ADDRESSES}
                element={<AccountAddress />}
              ></Route>
              <Route
                path={PATHS.DASHBOARD.WISHLIST}
                element={<AccountWishlist />}
              ></Route>
            </Route>
            <Route path={PATHS.CART} element={<CartPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
