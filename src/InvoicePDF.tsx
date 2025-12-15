import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"
import { InvoiceFormValues } from "./lib/InvoiceSchema"

export function InvoicePDF({ data }: { data: InvoiceFormValues }) {
    console.log("Generating PDF with data:", data);
  const styles = StyleSheet.create({
    page: {
      padding: 32,
      fontSize: 11,
      fontFamily: "Helvetica",
      color: "#111",
    },

    header: {
      backgroundColor: data.color || "#2563EB",
      color: "white",
      padding: 16,
      marginBottom: 24,
    },

    title: {
      fontSize: 18,
      fontWeight: "bold",
    },

    section: {
      marginBottom: 16,
    },

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    tableHeader: {
      flexDirection: "row",
      borderBottom: "1 solid #000",
      paddingBottom: 6,
      marginTop: 12,
      fontWeight: "bold",
    },

    tableRow: {
      flexDirection: "row",
      paddingVertical: 6,
      borderBottom: "1 solid #eee",
    },

    col1: { width: "40%" },
    col2: { width: "15%" },
    col3: { width: "20%" },
    col4: { width: "25%", textAlign: "right" },

    total: {
      marginTop: 16,
      textAlign: "right",
      fontSize: 14,
      fontWeight: "bold",
      color: data.color || "#2563EB",
    },
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.providerName}</Text>
          <Text>{data.providerAddress}</Text>
          <Text>
            {data.providerEmail} • {data.providerPhone}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <View>
              <Text>Bill To:</Text>
              <Text>{data.recievedFrom}</Text>
              <Text>{data.address}</Text>
            </View>

            <View>
              <Text>Subscription: {data.subscriptionType}</Text>
              <Text>User ID: {data.userId}</Text>
              <Text>Speed: {data.speed} Mbps</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.col1}>Service</Text>
            <Text style={styles.col2}>Qty</Text>
            <Text style={styles.col3}>Remarks</Text>
            <Text style={styles.col4}>Amount</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.col1}>Internet Bandwidth Charges</Text>
            <Text style={styles.col2}>1</Text>
            <Text style={styles.col3}>Online Payment</Text>
            <Text style={styles.col4}>₹ {data.totalAmount}</Text>
          </View>
        </View>

        <Text style={styles.total}>
          Total: ₹ {data.totalAmount}
        </Text>

        <Text style={{ marginTop: 24, fontSize: 10 }}>
          This is a computer-generated invoice and does not require a signature.
        </Text>
      </Page>
    </Document>
  )
}
