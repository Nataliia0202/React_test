import {
  HeroSection,
  HeroTitel,
  HeroText,
  HeroButton,
  HeroWraper,
} from "./Hero.styled";

export const Hero = () => {
    return (
      <>
        <HeroSection>
          <HeroWraper>
            <HeroTitel>Качественный ремонт квартир</HeroTitel>
            <HeroText>
              Бесплатный выезд замерщика в день обращения! Начинаем ремонт в
              течении 3 дней!
            </HeroText>
            <HeroButton>Записаться на замер</HeroButton>
          </HeroWraper>
        </HeroSection>
      </>
    );
}