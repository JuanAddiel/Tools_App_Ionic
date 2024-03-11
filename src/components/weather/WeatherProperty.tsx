import {
  IonCardSubtitle,
  IonCol,
  IonIcon,
  IonNote,
  IonRow,
} from "@ionic/react";
import { pulseOutline, sunnyOutline, thermometerOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
interface WeatherPropertyProps {
  type: "wind" | "feelsLike" | "indexUV" | "pressure";
  currentWeather: {
    current: {
      wind_mph: number;
      feelslike_c: number;
      uv: number;
      pressure_mb: number;
    };
  };
}

export const WeatherProperty: React.FC<WeatherPropertyProps> = ({
  type,
  currentWeather,
}) => {
  const [property, setProperty] = useState<{
    isIcon: boolean;
    icon: string | any;
    alt: string;
    label: string;
    value: string | number;
  } | null>(null);

  useEffect(() => {
    const properties = {
      wind: {
        isIcon: false,
        icon: "/assets/wind.png",
        alt: "wind",
        label: "Wind",
        value: `${currentWeather.current.wind_mph}mph`,
      },
      feelsLike: {
        isIcon: true,
        icon: thermometerOutline,
        alt: "feels like",
        label: "Feels like",
        value: `${currentWeather.current.feelslike_c}°C`,
      },
      indexUV: {
        isIcon: true,
        icon: sunnyOutline,
        alt: "index uv",
        label: "Index UV",
        value: currentWeather.current.uv,
      },
      pressure: {
        isIcon: true,
        icon: pulseOutline,
        alt: "pressure",
        label: "Pressure",
        value: `${currentWeather.current.pressure_mb} mbar`,
      },
    };

    setProperty(properties[type]);
  }, [type, currentWeather]);

  return (
    <IonCol size="6">
      <IonRow className="ion-justify-content-center ion-align-items-center">
        <IonCol size="3">
          {property && (
            <>
              {!property.isIcon && (
                <img
                  alt={property.alt}
                  src={property.icon}
                  height="32"
                  width="32"
                />
              )}
              {property.isIcon && (
                <IonIcon
                  icon={property.icon}
                  color="medium"
                  style={{ fontSize: "2rem" }}
                />
              )}
            </>
          )}
        </IonCol>

        <IonCol size="9">
          {property && (
            <>
              <IonCardSubtitle>{property.label}</IonCardSubtitle>
              <IonNote>{property.value}</IonNote>
            </>
          )}
        </IonCol>
      </IonRow>
    </IonCol>
  );
};

