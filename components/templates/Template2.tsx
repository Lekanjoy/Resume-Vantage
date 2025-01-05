'use client'
import { resumeDataProps } from '@/types'
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 30,
    borderBottom: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    width: 200,
    textAlign: 'right',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    right: 100,
    top: 0,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#4A90E2',
    marginBottom: 10,
  },
  summary: {
    fontSize: 10,
    width: '60%',
    lineHeight: 1.5,
  },
  contact: {
    fontSize: 10,
    marginBottom: 5,
  },
  content: {
    flexDirection: 'row',
    gap: 30,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    width: '40%',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#4A90E2',
    color: 'white',
    padding: 5,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 12,
    color: '#4A90E2',
  },
  date: {
    fontSize: 10,
    color: '#666',
    marginBottom: 5,
  },
  location: {
    fontSize: 10,
    color: '#666',
    fontStyle: 'italic',
  },
  bulletPoint: {
    fontSize: 10,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  skillItem: {
    marginBottom: 8,
  },
  skillName: {
    fontSize: 10,
    marginBottom: 3,
  },
  skillBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
  skillProgress: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 2,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  languageName: {
    fontSize: 10,
    width: 60,
  },
  dots: {
    flexDirection: 'row',
    gap: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
  },
  dotFilled: {
    backgroundColor: '#4A90E2',
  },
  dotEmpty: {

  },
})

const skills = [
  { name: 'SEO', level: 95 },
  { name: 'Public Speaking', level: 90 },
  { name: 'Negotiation', level: 85 },
  { name: 'Teamwork', level: 100 },
  { name: 'Decision Making', level: 95 },
  { name: 'Research & Strategy', level: 90 },
  { name: 'Emotional Intelligence', level: 85 },
  { name: 'Outbound Marketing', level: 95 },
  { name: 'Email Marketing', level: 90 },
  { name: 'Google Analytics', level: 85 },
  { name: 'Sales & Marketing', level: 80 },
]

const languages = [
  { name: 'English', level: 5 },
  { name: 'Spanish', level: 4 },
  { name: 'French', level: 2 },
]

export default function Template2({resumeData}: resumeDataProps) {
  return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.title}>Business Development Manager</Text>
              <Text style={styles.summary}>
                Professional Business Developer with more than four years of experience in the business development processes. 
                Involved in product testing, management, and development of new business opportunities.
              </Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.contact}>john.doe@gmail.com</Text>
              <Text style={styles.contact}>202-555-0166</Text>
              <Text style={styles.contact}>New York, USA</Text>
              <Text style={styles.contact}>linkedin.com/in/john.doe</Text>
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Left Column */}
            <View style={styles.leftColumn}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
                <View style={styles.experienceItem}>
                  <Text style={styles.jobTitle}>Business Development Manager</Text>
                  <Text style={styles.company}>AirState Solutions</Text>
                  <Text style={styles.date}>09/2014 - 06/2017</Text>
                  <Text style={styles.location}>New York, USA</Text>
                  <Text style={styles.bulletPoint}>• Successfully managed $2 - 3 million budget projects and successfully achieved the project scheduled goals.</Text>
                  <Text style={styles.bulletPoint}>• Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</Text>
                  <Text style={styles.bulletPoint}>• Reviewed constantly the customer feedback and improved processes increasing satisfaction rate from 81% to 95%.</Text>
                  <Text style={styles.bulletPoint}>• Ensured that new clients will grow into a loyal customer base in a specialist niche market.</Text>
                </View>

                <View style={styles.experienceItem}>
                  <Text style={styles.jobTitle}>Business Development Assistant</Text>
                  <Text style={styles.company}>AirState Solutions</Text>
                  <Text style={styles.date}>08/2012 - 09/2014</Text>
                  <Text style={styles.location}>Chicago, USA</Text>
                  <Text style={styles.bulletPoint}>• Increased the customer satisfaction rate by 25% by improving the customer service.</Text>
                  <Text style={styles.bulletPoint}>• Planned, supervised, and coordinated daily activity of 3 junior business analysts.</Text>
                  <Text style={styles.bulletPoint}>• Improved the communication with the Marketing department.</Text>
                  <Text style={styles.bulletPoint}>• Directed the creation and implementation of a Business Continuity Plan.</Text>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>EDUCATION</Text>
                <View style={styles.experienceItem}>
                  <Text style={styles.jobTitle}>MSc in Economics and Business Administration</Text>
                  <Text style={styles.company}>The University of Chicago</Text>
                  <Text style={styles.date}>09/2008 - 06/2010</Text>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>LANGUAGES</Text>
                {languages.map((language, index) => (
                  <View key={index} style={styles.languageRow}>
                    <Text style={styles.languageName}>{language.name}</Text>
                    <View style={styles.dots}>
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <View
                          key={dot}
                          style={[
                            styles.dot,
                            dot <= language.level ? styles.dotFilled : styles.dotEmpty,
                          ]}
                        />
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Right Column */}
            <View style={styles.rightColumn}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>SKILLS</Text>
                {skills.map((skill, index) => (
                  <View key={index} style={styles.skillItem}>
                    <Text style={styles.skillName}>{skill.name}</Text>
                    <View style={styles.skillBar}>
                      <View style={[
                        styles.skillProgress, 
                        { width: `${skill.level}%` }
                      ]} />
                    </View>
                  </View>
                ))}
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>ORGANIZATIONS</Text>
                <Text style={styles.bulletPoint}>• American Management Association (2015 - Present)</Text>
                <Text style={styles.bulletPoint}>• Association of Private Enterprise Education (2014 - Present)</Text>
                <Text style={styles.bulletPoint}>• eBusiness Association (eBA) (2013 - Present)</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>HONOURS AND AWARDS</Text>
                <View style={styles.experienceItem}>
                  <Text style={styles.bulletPoint}>• Jury Member, Venture Cup Entrepreneurship Competition (2016)</Text>
                  <Text style={[styles.bulletPoint, { color: '#666', marginLeft: 10 }]}>Venture Cup USA</Text>
                </View>
                <View style={styles.experienceItem}>
                  <Text style={styles.bulletPoint}>• Sales Individual & Business Development Award (2015)</Text>
                  <Text style={[styles.bulletPoint, { color: '#666', marginLeft: 10 }]}>AirState Business Awards</Text>
                </View>
                <View style={styles.experienceItem}>
                  <Text style={styles.bulletPoint}>• Excellence in Customer Partnering Award</Text>
                  <Text style={[styles.bulletPoint, { color: '#666', marginLeft: 10 }]}>IES - Institute of Excellence in Sales</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
  )
}

