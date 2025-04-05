"use client";
import { resumeDataProps } from "@/types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#3B82F6", // blue-400
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerLeft: {
    width: "60%",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: "#3B82F6", // blue-500
    marginBottom: 2,
  },
  summary: {
    fontSize: 8,
    color: "#4B5563", // gray-600
    marginBottom: 5,
  },
  headerRight: {
    width: "40%",
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    fontSize: 8,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 1,
  },
  company: {
    fontSize: 9,
    color: "#3B82F6", // blue-500
    marginBottom: 1,
  },
  date: {
    fontSize: 8,
    color: "#6B7280", // gray-500
    marginBottom: 1,
  },
  location: {
    fontSize: 8,
    color: "#6B7280", // gray-500
    fontStyle: "italic",
    marginBottom: 2,
  },
  bulletPoint: {
    fontSize: 8,
    color: "#4B5563", // gray-600
    marginBottom: 1,
    paddingLeft: 10,
  },
  skillsContainer: {
    marginBottom: 10,
  },
  skillItem: {
    marginBottom: 5,
  },
  skillName: {
    fontSize: 8,
    fontWeight: "medium",
    marginBottom: 1,
  },
  skillBar: {
    height: 2,
    backgroundColor: "#E5E7EB", // gray-200
    borderRadius: 1,
  },
  skillBarFill: {
    height: 2,
    backgroundColor: "#3B82F6", // blue-500
    borderRadius: 1,
    width: "80%",
  },
  educationItem: {
    marginBottom: 5,
  },
  educationTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 1,
  },
  schoolName: {
    fontSize: 8,
    color: "#4B5563", // gray-600
    marginBottom: 1,
  },
  schoolLocation: {
    fontSize: 8,
    color: "#4B5563", // gray-600
    marginBottom: 1,
  },
  educationDate: {
    fontSize: 8,
    color: "#6B7280", // gray-500
  },
  organizationItem: {
    marginBottom: 3,
  },
  organizationTitle: {
    fontSize: 8,
    fontWeight: "medium",
    marginBottom: 1,
  },
  organizationInstitution: {
    fontSize: 8,
    fontWeight: "medium",
    marginBottom: 1,
  },
  organizationDate: {
    fontSize: 8,
    color: "#9CA3AF", // gray-400
  },
});

export default function ModernTemplate({ resumeData }: resumeDataProps) {
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
    certifications,
  } = resumeData;

  const fullName = fname + " " + lname;
  const location = city + ", " + country;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.summary}>{careerSummary}</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.contactItem}>
              <Text>{email}</Text>
              <Text>📧</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{phone}</Text>
              <Text>📱</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{location}</Text>
              <Text>📍</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>linkedin.com/in/john.doe</Text>
              <Text>💼</Text>
            </View>
          </View>
        </View>

        {/* Work Experience */}
        {experience.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
            {experience.map((exp) => (
              <View key={exp._id} style={styles.experienceItem}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
                    <Text style={styles.company}>{exp.company}</Text>
                  </View>
                  <Text
                    style={styles.date}
                  >{`${exp.startDate} - ${exp.endDate}`}</Text>
                </View>
                <Text
                  style={styles.location}
                >{`${exp.city} - ${exp.country}`}</Text>
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
          <View style={styles.skillsContainer}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            {skills.map((skill) => (
              <View key={skill} style={styles.skillItem}>
                <Text style={styles.skillName}>{skill}</Text>
                <View style={styles.skillBar}>
                  <View style={styles.skillBarFill} />
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {education.map((edu) => (
              <View key={edu._id} style={styles.educationItem}>
                <Text style={styles.educationTitle}>
                  {edu.degreeType} in {edu.studyField}
                </Text>
                <Text style={styles.schoolName}>{edu.schoolName}</Text>
                <Text style={styles.schoolLocation}>{edu.schoolLocation}</Text>
                <Text style={styles.educationDate}>
                  {edu.startDate} {edu.stillEnrolled ? "-" : ""} {edu.gradDate}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Organizations */}
        {certifications && certifications.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>ORGANIZATIONS</Text>
            {certifications.map((cert, index) => (
              <View key={index} style={styles.organizationItem}>
                <Text style={styles.organizationTitle}>{cert.title}</Text>
                <Text style={styles.organizationInstitution}>
                  {cert.institution}
                </Text>
                <Text style={styles.organizationDate}>{cert.date}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
