import { useState } from "react";
import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import { MenuMobile } from "../../components/MenuMobile";
import { OtherModels } from "../../components/OtherModels";
import { HomeContainer } from "../../styles/pages/HomeStyles";

export function Cart() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <h1>
          Cart
        </h1>
      </HomeContainer>
    </>
  )
}