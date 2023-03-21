import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function PageNotFound() {
  const location = useLocation();

  useEffect(() => {
    window.location.href = `https://developers.strava.com/${location.pathname}`;
  }, [location]);

  return null;
}

export default PageNotFound;