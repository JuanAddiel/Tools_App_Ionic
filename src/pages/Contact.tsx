import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import addiel from '/assets/Addiel.jpg';
import { useEffect } from "react";
export const Contact = ()=>{
    return (
      <>
        <IonCard>
          <img alt="Silhouette of mountains" src={addiel}/>
          <IonCardHeader>
            <IonCardTitle>Juan Addiel Leonardo</IonCardTitle>
            <IonCardSubtitle>addieljaquez@gmail.com</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            ¡Descubre la conveniencia en la palma de tu mano! Nuestras
            aplicaciones móviles ofrecen una experiencia sin igual.
          </IonCardContent>
        </IonCard>
      </>
    );
}