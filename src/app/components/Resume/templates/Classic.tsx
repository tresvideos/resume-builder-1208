
import { Document, Page, View } from '@react-pdf/renderer';
import type { Resume } from 'lib/redux/types';
import type { Settings } from 'lib/redux/settingsSlice';
import { ResumePDFProfile } from 'components/Resume/ResumePDF/ResumePDFProfile';
import { ResumePDFWorkExperience } from 'components/Resume/ResumePDF/ResumePDFWorkExperience';
import { ResumePDFEducation } from 'components/Resume/ResumePDF/ResumePDFEducation';
import { ResumePDFProject } from 'components/Resume/ResumePDF/ResumePDFProject';
import { ResumePDFSkills } from 'components/Resume/ResumePDF/ResumePDFSkills';
import { SuppressResumePDFErrorMessage } from 'components/Resume/ResumePDF/common/SuppressResumePDFErrorMessage';

type Props = { resume: Resume; settings: Settings; isPDF?: boolean };

export default function Classic({ resume, settings }: Props) {
  return (
    <Document>
      <Page size={settings.documentSize as any} style={{ padding: 24 }}>
        <SuppressResumePDFErrorMessage />
        <View>
          <ResumePDFProfile resume={resume} settings={settings} />
          <ResumePDFWorkExperience resume={resume} settings={settings} />
          <ResumePDFEducation resume={resume} settings={settings} />
          <ResumePDFProject resume={resume} settings={settings} />
          <ResumePDFSkills resume={resume} settings={settings} />
        </View>
      </Page>
    </Document>
  );
}
