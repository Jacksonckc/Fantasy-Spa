import { RoundButton } from '../particles';

const generateButton = (buttonsInfo) => {
  console.log('here');
  const buttons = [];
  buttonsInfo?.forEach((info) => {
    const props = {
      path: info[0],
      caption: info[1],
      route: info[2],
      key: info[3],
    };
    buttons.push(<RoundButton {...props} />);
  });
  return buttons;
};

export default generateButton;
