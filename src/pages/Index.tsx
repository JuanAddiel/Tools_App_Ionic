import React from "react";
import { IonCard, IonCardContent, IonButton, IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import toolboxImage from "/assets/toolbox.png";

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <IonCard>
        <img
          src={toolboxImage}
          alt="Caja de herramientas"
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
        <IonCardContent>
          <h2>¡Bienvenido a nuestra aplicación multifuncional!</h2>
          <p>
            Descubre todas las herramientas y funciones que tenemos para
            ofrecerte.
          </p>
          <IonButton expand="block" routerLink="/gender">
            Seguir <IonIcon icon={arrowForward} slot="end" />
          </IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Index;
