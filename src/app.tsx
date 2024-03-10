import logo from "./assets/logo.svg";
import { ButtonLink } from "./components/button-link";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center py-24 mx-auto max-w-2xl px-8">
      <img
        src={logo}
        alt="Logo bia grave - pessoas e negócios"
        className="max-w-96"
      />
      <div className="flex-1 flex flex-col justify-center gap-6 max-w-96 w-full">
        <ButtonLink title="Whatsapp" hrefLink="" />
        <ButtonLink title="Endereço" hrefLink="" />
        <ButtonLink title="Facebook" hrefLink="" />
      </div>
      <p className="text-xs">
        feito por{" "}
        <a
          href="https://www.instagram.com/gustavorezin/"
          className="transition hover:text-blue hover:duration-700"
        >
          @gustavorezin
        </a>
      </p>
    </div>
  );
}
