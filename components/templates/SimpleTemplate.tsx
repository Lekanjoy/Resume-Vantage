"use client";
import { useTypedSelector } from "@/store/store";
import { resumeDataProps } from "@/types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    color: "#003366",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  contact: {
    position: "absolute",
    right: 30,
    top: 30,
    textAlign: "right",
  },
  contactItem: {
    marginBottom: 5,
    fontSize: 10,
  },
  summary: {
    fontSize: 10,
    marginBottom: 20,
    lineHeight: 1.5,
    width: "60%",
  },
  sectionTitle: {
    fontSize: 14,
    color: "#003366",
    borderBottom: 1,
    borderBottomColor: "#003366",
    paddingBottom: 5,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  skillPill: {
    backgroundColor: "#003366",
    color: "white",
    padding: "4 8",
    borderRadius: 4,
    fontSize: 10,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    marginBottom: 2,
  },
  date: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 10,
    marginBottom: 3,
    lineHeight: 1.5,
  },
  location: {
    position: "absolute",
    right: 0,
    fontSize: 10,
    color: "#666666",
  },
});

export default function SimpleTemplate({resumeData}: resumeDataProps) {
  
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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{fname + " " + lname}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.contact}>
            <Text style={styles.contactItem}>{email}</Text>
            <Text style={styles.contactItem}>{phone}</Text>
            <Text style={styles.contactItem}>{city}, {country}</Text>
          </View>
          <Text style={styles.summary}>{careerSummary}</Text>
        </View>

        {/* Skills */}
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <Text key={index} style={styles.skillPill}>
              {skill}
            </Text>
          ))}
        </View>

        {/* Work Experience */}
        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        {experience.map((exp) => {
          return (
            <View key={exp._id} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.date}>
                {exp.startDate} - {exp.endDate}
              </Text>
              {exp.responsibilities.responsibilities.map((resp, index) => {
                return (
                  <Text key={index} style={styles.bulletPoint}>
                    • {resp}
                  </Text>
                );
              })}
            </View>
          );
        })}

        {/* Education */}
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {education.map((edu) => {
          return (
            <View key={edu._id} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>
               { edu.degreeType} in {edu.studyField}
              </Text>
              <Text style={styles.company}>{edu.schoolName}</Text>
              <Text style={styles.date}>{edu.startDate} - {edu.gradDate}</Text>
            </View>
          );
        })}

        {/* Organizations
        <Text style={styles.sectionTitle}>ORGANIZATIONS</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.bulletPoint}>
            • American Management Association (2015 - Present)
          </Text>
          <Text style={styles.bulletPoint}>
            • Association of Private Enterprise Education (2014 - Present)
          </Text>
          <Text style={styles.bulletPoint}>
            • eBusiness Association (eBA) (2013 - Present)
          </Text>
        </View> */}
      </Page>
    </Document>
  );
}
