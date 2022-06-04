import { useEffect, useState } from 'react';
import CertificateSection from '../components/CertificateSection';
import CourseSection from '../components/CourseSection';
import DiscountSection from '../components/DiscountSection';
import HeroSection from '../components/HeroSection';
import MeetInstructor from '../components/MeetInstructor';
import Ready from '../components/Ready';
import SponsorSection from '../components/SponsorSection';
import TrustSection from '../components/TrustSection';
import TutorialSection from '../components/TutorialSection';
import OnlyFooterLayout from '../Layout/OnlyFooter';
import { GetAllCourseResponse } from '../Types';
import { axiosCourse } from '../utils/axios';

function Home() {
  const [courses, setCourses] = useState<GetAllCourseResponse[]>([]);
  useEffect(() => {
    let here = true;
    (() => {
      axiosCourse({
        method: 'get',
        url: '/',
      })
        .then((resp) => {
          if (!here) {
            return;
          }
          if (resp.data.success) {
            setCourses(resp.data.message);
          } else {
            throw new Error(resp.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })();
    return () => {
      here = false;
    };
  }, []);

  return (
    <OnlyFooterLayout>
      <HeroSection />
      <CourseSection courses={courses} />
      <TutorialSection />
      <CertificateSection />
      <DiscountSection />
      <TrustSection />
      <SponsorSection />
      <MeetInstructor
        courses={[
          courses[0],
          courses.find((course) => course.id != courses[0].id)!,
        ]}
      />
      <Ready />
    </OnlyFooterLayout>
  );
}

export default Home;
