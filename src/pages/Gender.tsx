import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonLabel,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import { useEffect, useState } from "react";

export const Gender = () => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name !== "") {
      getGender(name);
    }
  }, [name]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const getGender = async (name: string) => {
    try {
      setLoading(true); // Iniciar el spinner de carga
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
      setError(""); // Limpiar el error si la solicitud tiene éxito
    } catch (error) {
      console.error("Error fetching gender:", error);
      setError("Error fetching gender. Please try again later.");
    } finally {
      setLoading(false); // Detener el spinner de carga, independientemente del resultado
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gender</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding ion-margin-top">
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonInput
                style={{
                  fontSize: "1.2rem",
                  padding: "12px",
                  height: "55px",
                }}
                label="Your name"
                labelPlacement="floating"
                placeholder="Enter name"
                value={name}
                onIonChange={(e) => handleName(e)}
                id="name"
                type="text"
              ></IonInput>
            </IonItem>
            <IonButton
              type="submit"
              expand="block"
              color="success"
              className="ion-margin-top"
              disabled={loading}
            >
              {loading ? (
                <IonSpinner name="crescent" duration={500} />
              ) : (
                "Submit"
              )}
            </IonButton>
          </form>

          {error && <IonLabel color="danger">{error}</IonLabel>}

          {gender !== "" && (
            <>
              <IonCard>
                <IonImg
                  style={{
                    width: "200px",
                    height: "200px",
                    marginTop: "3rem",
                  }}
                  alt="Silhouette of mountains"
                  src={
                    gender === "male"
                      ? "/assets/userMan.png"
                      : "/assets/userWomen.png"
                  }
                />
                <IonCardHeader>
                  <IonCardTitle>{gender.toUpperCase()}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Gender;
