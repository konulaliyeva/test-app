import { Flex, FlexItem } from './LayOut';

import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { theme } from '../theme/theme';
import userPic from '../assets/img/useStatusPic.svg';

function SideBar() {
  const { primary, hoverColor } = theme.palette;

  return (
    <FlexItem width="84px">
      <Flex
        background={primary.main}
        height="100vh"
        direction="column"
        justify="space-around"
      >
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
          selected={hoverColor.main}
        >
          <QuestionAnswerIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
        >
          <img src={userPic} alt="" />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
        >
          <HomeIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
        >
          <ForumIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
        >
          <GroupsIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
        >
          <AppsIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
        >
          <StackedLineChartIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          background={primary.main}
          self="center"
          padding="10px 13px"
        >
          <SettingsRoundedIcon style={{ color: '#fff' }} />
        </FlexItem>
        <FlexItem
          hover={hoverColor.main}
          self="center"
          background={primary.main}
          padding="10px 13px"
        >
          <HelpCenterIcon style={{ color: '#fff' }} />
        </FlexItem>
      </Flex>
    </FlexItem>
  );
}

export default SideBar;
