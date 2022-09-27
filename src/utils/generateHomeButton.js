import { HomeRoundButton } from '../particles';

const generateHomeButton = (buttonsInfo) => {
  const buttons = [];
  buttonsInfo?.forEach((info) => {
    const props = {
      path: info[0],
      caption: info[1],
      route: info[2],
      key: info[3],
    };
    buttons.push(<HomeRoundButton {...props} />);
  });
  return buttons;
};

export default generateHomeButton;
