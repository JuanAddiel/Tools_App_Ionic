import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
} from "@ionic/react";

const AgeDetector = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (name !== "") {
      verifyAge();
    }
  }, [name]);

  const verifyAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      if (data.age) {
        setAge(data.age);
        determineCategory(data.age);
        setError("");
      } else {
        setError("Age information not available for this name.");
      }
    } catch (error) {
      setError("Failed to fetch age information. Please try again later.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const determineCategory = (age: number) => {
    if (age < 30) {
      setCategory("young");
    } else if (age >= 30 && age < 60) {
      setCategory("adult");
    } else {
      setCategory("old man");
    }
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Age Dectector</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Age Dectector</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={handleSubmit}>
          <IonCardContent>
            <IonInput
              value={name}
              placeholder="Enter name"
              onIonChange={(e) => setName(e.detail.value!)}
              required
              clearInput
            ></IonInput>
          </IonCardContent>
          <IonButton
            type="submit"
            expand="block"
            className="ion-margin-top"
            color="primary"
          >
            Age Dectector
          </IonButton>
        </form>

        {age && category && (
          <IonCard className="ion-margin-top">
            <IonCardHeader>
              <IonCardSubtitle>{name}</IonCardSubtitle>
              <IonCardTitle>{`Age: ${age}`}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow className="ion-align-items-center">
                  <IonCol size="6" className="ion-text-center">
                    <IonImg
                      src={`assets/${category}.png`}
                      alt={category}
                      className="image-style"
                    />
                  </IonCol>
                  <IonCol size="6">
                    <p className="ion-text-justify">
                      ¡Hello {name}! are {category}.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AgeDetector;
