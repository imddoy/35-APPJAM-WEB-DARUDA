import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useInfoQuery } from '@apis/user';
import { AFFILIATION_OPTIONS } from '@pages/myPage/constants/affiliationOptions';
import { extractUserId } from '@utils';
import { useAnalytics } from 'src/hoc/useAnalytics';

const MixpanelUserSetup = () => {
  const { setUserProperty, isReady } = useAnalytics();
  const { data: user } = useInfoQuery(!!extractUserId());

  useEffect(() => {
    if (!user || !isReady) return;

    if (user.positions || user.nickname) {
      const affiliationKey = Object.keys(AFFILIATION_OPTIONS).find(
        (key) => AFFILIATION_OPTIONS[key as keyof typeof AFFILIATION_OPTIONS] === user.positions,
      );
      setUserProperty(user.userId.toString(), {
        affiliation: affiliationKey,
        member: true,
      });
    }
  }, [user, isReady]);

  const location = useLocation();

  useEffect(() => {
    if (!isReady) return;
    mixpanel.track_pageview();
  }, [location.pathname]);
  return null;
};

export default MixpanelUserSetup;
