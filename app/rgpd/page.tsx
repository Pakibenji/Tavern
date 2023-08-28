import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { littleTitle } from "@app/fonts";

const Rgpd = () => {
  return (
    <>
      <div className="rgpd-container-page">
        <div className="link-accueil-container">
            <Link href='/'>Go to Home</Link>
        </div>
        <h2 style={littleTitle.style} className={styles.loginTitle}>GRPD</h2>
        <div className={styles.rgpdText}>
          <p>
            Politique de confidentialité et de protection des données :<br />{" "}
            Chez Sound Spectrum, nous accordons une grande importance à la
            confidentialité et à la protection de vos données personnelles.
            Cette politique de confidentialité explique quelles informations
            nous collectons, comment nous les utilisons, et comment nous les
            protégeons conformément au Règlement général sur la protection des
            données (RGPD).
          </p>
          <p>
            Collecte des données personnelles :<br />
            Nous collectons uniquement les données personnelles que vous nous
            fournissez volontairement lorsque vous utilisez notre site web. Cela
            peut inclure, par exemple, votre nom, votre adresse e-mail, votre
            numéro de téléphone, et toute autre information que vous choisissez
            de partager avec nous via nos formulaires de contact, d'inscription
            ou de commande.
          </p>
          <p>
            Utilisation des données personnelles : <br />
            Nous utilisons vos données personnelles uniquement dans le cadre des
            finalités spécifiques pour lesquelles vous les avez fournies. Cela
            peut inclure, par exemple, pour vous fournir les services que vous
            avez demandés, pour répondre à vos demandes, pour personnaliser
            votre expérience utilisateur, ou pour vous envoyer des informations
            promotionnelles si vous avez consenti à les recevoir.
          </p>
          <p>
            Protection des données personnelles :<br /> Nous prenons des mesures
            de sécurité appropriées pour protéger vos données personnelles
            contre tout accès non autorisé, toute divulgation, toute altération
            ou toute destruction. Nous utilisons des technologies de sécurité,
            des protocoles de cryptage et des pratiques strictes pour garantir
            la sécurité de vos informations personnelles.
          </p>
          <p>
            Partage des données personnelles :<br /> Nous ne vendons,
            n'échangeons, ni ne louons vos données personnelles à des tiers sans
            votre consentement explicite. Cependant, nous pouvons partager vos
            informations avec des prestataires de services tiers qui nous aident
            à exploiter notre site web ou à vous fournir nos services, sous
            réserve qu'ils acceptent de respecter la confidentialité de vos
            données. Vos droits en matière de protection des données Vous avez
            le droit d'accéder, de rectifier, de limiter ou de supprimer les
            données personnelles que nous détenons vous concernant. Vous avez
            également le droit de retirer votre consentement à tout moment, de
            vous opposer au traitement de vos données, et de demander la
            portabilité de vos données. Pour exercer ces droits, veuillez nous
            contacter en utilisant les coordonnées fournies ci-dessous.
          </p>
          <p>
            Cookies et technologies similaires :<br /> Nous utilisons des
            cookies et d'autres technologies similaires pour améliorer votre
            expérience sur notre site web, analyser les tendances, administrer
            le site, et recueillir des informations démographiques sur nos
            utilisateurs dans un but global d'amélioration de nos services. Vous
            pouvez contrôler les cookies via les paramètres de votre navigateur.
            Modifications de la politique de confidentialité Nous nous réservons
            le droit de modifier cette politique de confidentialité à tout
            moment. Toute modification sera publiée sur cette page, avec la date
            de mise à jour correspondante. Nous vous encourageons à consulter
            régulièrement cette page pour rester informé des éventuelles
            modifications. Nous contacter Si vous avez des questions, des
            préoccupations ou des demandes concernant cette politique de
            confidentialité ou la protection de vos données personnelles,
            veuillez nous contacter.
          </p>
        </div>
      </div>
    </>
  );
};

export default Rgpd;