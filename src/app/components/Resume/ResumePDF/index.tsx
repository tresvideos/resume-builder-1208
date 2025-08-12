
import dynamic from 'next/dynamic';
import { useAppSelector } from 'lib/redux/hooks';
import { selectSelectedTemplate } from 'lib/redux/settingsSlice';
import type { Resume } from 'lib/redux/types';
import type { Settings } from 'lib/redux/settingsSlice';

const Classic = dynamic(() => import('components/Resume/templates/Classic'));
const Modern = dynamic(() => import('components/Resume/templates/Modern'));
const Minimal = dynamic(() => import('components/Resume/templates/Minimal'));

export function ResumePDF(props: { resume: Resume; settings: Settings; isPDF?: boolean }) {
  const tpl = useAppSelector(selectSelectedTemplate);
  switch (tpl) {
    case 'modern': return <Modern {...props} />;
    case 'minimal': return <Minimal {...props} />;
    default: return <Classic {...props} />;
  }
}
