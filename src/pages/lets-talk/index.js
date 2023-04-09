import Script from "next/script";
import { useRouter } from "next/router";

const CalendlyForm = () => {
  const router = useRouter();

  const { userName, type, showCookies, showDetails } = router?.query;

  return (
    <>
      <div
        className="calendly-inline-widget w-100 h-screen mb-100 sm:mx-24mt-24  md:-mx-24 lg:mx-32 xl:mx-80  "
        data-url={`https://calendly.com/${userName}${
          type ? `/${type}` : ""
        }?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}
      ></div>

      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};

export default CalendlyForm;
