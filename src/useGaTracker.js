// import { useEffect, useState } from "react";
// import ReactGA from "react-ga";

// const useGaTracker = () => {
//     const [initialized, setInitialized] = useState(false);
//     useEffect(() => {
//         if (!window.location.href.includes("localhost")) {
//             ReactGA.initialize("UA-207734840-1");
//             setInitialized(true);
//         }
//     }, []);

//     useEffect(() => {
//         if (initialized) {
//             ReactGA.pageview(window.location.pathname + window.location.search);
//         }
//     }, [initialized]);
// };

// export default useGaTracker;
