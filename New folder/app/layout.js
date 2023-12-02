
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "@/component/wrapper/Wrapper";


import axios from "axios";


export default function RootLayout({ children }) {


  return ( 
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
