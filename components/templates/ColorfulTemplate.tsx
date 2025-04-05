"use client";
import { resumeDataProps } from "@/types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
  },
  header: {
    backgroundColor: "#2563EB", // blue-600
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    marginBottom: 2,
  },
  contactContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    fontSize: 8,
  },
  contactIcon: {
    marginRight: 5,
  },
  section: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2563EB", // blue-600
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitleIcon: {
    marginRight: 5,
  },
  summary: {
    fontSize: 8,
    marginBottom: 5,
  },
  experienceItem: {
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 1,
  },
  companyInfo: {
    fontSize: 8,
    color: "#4B5563", // gray-600
    marginBottom: 1,
  },
  date: {
    fontSize: 8,
    color: "#6B7280", // gray-500
    marginBottom: 2,
  },
  bulletPoint: {
    fontSize: 8,
    marginBottom: 1,
    paddingLeft: 10,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    width: "45%",
  },
  skillDot: {
    width: 2,
    height: 2,
    backgroundColor: "#2563EB", // blue-600
    borderRadius: 1,
    marginRight: 3,
  },
  skillText: {
    fontSize: 8,
  },
  educationItem: {
    marginBottom: 5,
  },
  educationTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 1,
  },
  schoolInfo: {
    fontSize: 8,
    color: "#4B5563", // gray-600
    marginBottom: 1,
  },
  educationDate: {
    fontSize: 8,
    color: "#6B7280", // gray-500
  },
});

export default function ColorfulTemplate({ resumeData }: resumeDataProps) {
  const {
    fname,
    lname,
    title,
    email,
    phone,
    city,
    country,
    careerSummary,
    experience,
    education,
    skills,
  } = resumeData;

  const fullName = fname + " " + lname;
  const location = city + ", " + country;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Contact Information */}
        <View style={styles.contactContainer}>
          {email && (
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>📧</Text>
              <Text>{email}</Text>
            </View>
          )}
          {phone && (
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>📱</Text>
              <Text>{phone}</Text>
            </View>
          )}
          {location && (
            <View style={styles.contactItem}>
              <Text style={styles.contactIcon}>📍</Text>
              <Text>{location}</Text>
            </View>
          )}
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>💼</Text>
            <Text>linkedin.com/in/john.doe</Text>
          </View>
        </View>

        {/* Professional Summary */}
        {careerSummary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Text style={styles.sectionTitleIcon}>📝</Text> Professional
              Summary
            </Text>
            <Text style={styles.summary}>{careerSummary}</Text>
          </View>
        )}

        {/* Work Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Text style={styles.sectionTitleIcon}>💼</Text> Work Experience
            </Text>
            {experience.map((exp) => (
              <View key={exp._id} style={styles.experienceItem}>
                <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
                <Text style={styles.companyInfo}>
                  {exp.company} | {`${exp.city}, ${exp.country}`}
                </Text>
                <Text
                  style={styles.date}
                >{`${exp.startDate} - ${exp.endDate}`}</Text>
                {exp.responsibilities.responsibilities.map((resp, index) => (
                  <Text key={index} style={styles.bulletPoint}>
                    • {resp}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Text style={styles.sectionTitleIcon}>🏆</Text> Skills
            </Text>
            <View style={styles.skillsGrid}>
              {skills.map((skill) => (
                <View key={skill} style={styles.skillItem}>
                  <View style={styles.skillDot} />
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Text style={styles.sectionTitleIcon}>🎓</Text> Education
            </Text>
            {education.map((edu) => (
              <View key={edu._id} style={styles.educationItem}>
                <Text style={styles.educationTitle}>
                  {edu.degreeType} in {edu.studyField}
                </Text>
                <Text style={styles.schoolInfo}>
                  {edu.schoolName} | {edu.schoolLocation}
                </Text>
                <Text style={styles.educationDate}>
                  {edu.startDate} - {edu.gradDate}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
