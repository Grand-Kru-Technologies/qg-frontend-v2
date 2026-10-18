import { render } from '@testing-library/react';
import Footer from "./Footer";

test('renders footer items', () => {
    render(<Footer />);

    // Facebook link: Navigate to https://www.facebook.com/QueerGlobal

    // Twitter link: Navigate to https://twitter.com/QueerGlobal_

    // Instagram link: Navigate to https://www.instagram.com/queerglobal/

    // LinkedIn link: Navigate to https://www.linkedin.com/company/queer-global/

    // Pinterest link: Navigate to https://www.pinterest.com/QueerGlobal/

    // Email link: Opens the native browser email widget with "mailTo: info@queerglobal.com"

    // Examine image count (length of img array): expect 6 or 7

    // Examine image alt attributes are present (getByAltText)

    // "GET TO KNOW US" text is present

    // Copyright: Dynamic year checker
    // Copyright: text is present

    // Ex:
    // const linkElement = screen.getByRole("link", { name: /SUPPORT US/i });
    // expect(linkElement).toBeInTheDocument();
  });
  