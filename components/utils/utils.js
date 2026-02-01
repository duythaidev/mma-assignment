const getIconSource = (iconName) => {
  const iconSources = {
    payslip: require('../../assets/icons/ic_payslip.svg'),
    dating: require('../../assets/icons/ic_img_dating.svg'),
    approve: require('../../assets/icons/test/approve.png'),
    reward: require('../../assets/icons/test/reward.png'),
    discipline: require('../../assets/icons/test/discip.png'),
    learning: require('../../assets/icons/test/learning.png'),
    tasks: require('../../assets/icons/test/task.png'),
    fptCare: require('../../assets/icons/test/fptcare.png'),
    events: require('../../assets/icons/test/events.png'),
    birthday: require('../../assets/icons/test/birthday.png'),
    game: require('../../assets/icons/test/game.png'),
    news: require('../../assets/icons/test/news.png'),
    survey: require('../../assets/icons/test/survey.png'),
    employeeinfo: require('../../assets/icons/test/employeeinfo.png'),
    starAve: require('../../assets/icons/test/star.png'),
  };

  return iconSources[iconName] || require('../../assets/icons/test/news.png');
};

export { getIconSource };
