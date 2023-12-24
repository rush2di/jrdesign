import Script from "next/script";

const TawkMessenger = () => {
  return process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID ? (
    <Script
      id="tawk-messenger"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/${process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
          Tawk_API.customStyle = {
            visibility: {
            //for desktop only
              desktop: {
                position: 'br', // bottom-right
                xOffset: 15, // 15px away from right
                yOffset: 40 // 40px up from bottom
              },
              // for mobile only
              mobile: {
                position: 'br', // bottom-left
                xOffset: 5, // 5px away from left
                yOffset: 90 // 50px up from bottom
              },
            }
          }
        `,
      }}
    />
  ) : (
    <></>
  );
};

export default TawkMessenger;
