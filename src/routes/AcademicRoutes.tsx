import { AcademicPeriodsPage } from '@/pages/protected/Academic/AcademicPeriods/AcademicPeriodsPage';
import { CampiPage } from '@/pages/protected/Academic/Campi/CampiPage';
import { ClassDetailsPage } from '@/pages/protected/Academic/Classes/ClassDetails/ClassDetailsPage';
import { ClassesPage } from '@/pages/protected/Academic/Classes/ClassesPage';
import { CourseCurriculumsPage } from '@/pages/protected/Academic/CourseCurriculums/CourseCurriculumsPage';
import { CourseOfferingsPage } from '@/pages/protected/Academic/CourseOfferings/CourseOfferingsPage';
import { CoursesPage } from '@/pages/protected/Academic/Courses/CoursesPage';
import { DisciplinesPage } from '@/pages/protected/Academic/Disciplines/DisciplinesPage';
import { EnrollmentPeriodsPage } from '@/pages/protected/Academic/EnrollmentPeriods/EnrollmentPeriodsPage';
import { NotificationsPage } from '@/pages/protected/Academic/Notifications/NotificationsPage';
import { StudentsPage } from '@/pages/protected/Academic/Students/StudentsPage';
import { TeachersPage } from '@/pages/protected/Academic/Teachers/TeachersPage';
import { Route } from 'react-router';

export const AcademicRoutes = () => {
   return (
      <>
         <Route path="campi" element={<CampiPage />} />
         <Route path="courses" element={<CoursesPage />} />
         <Route path="disciplines" element={<DisciplinesPage />} />
         <Route path="course-curriculums" element={<CourseCurriculumsPage />} />
         <Route path="course-offerings" element={<CourseOfferingsPage />} />
         <Route path="teachers" element={<TeachersPage />} />
         <Route path="classes" element={<ClassesPage />}>
            <Route path=":id" element={<ClassDetailsPage />} />
         </Route>
         <Route path="students" element={<StudentsPage />} />
         <Route path="academic-periods" element={<AcademicPeriodsPage />} />
         <Route path="enrollment-periods" element={<EnrollmentPeriodsPage />} />
         <Route path="notifications" element={<NotificationsPage />} />
      </>
   );
};
