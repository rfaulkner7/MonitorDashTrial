package hiscox.adapted.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;

@Entity // each object we are mapping is an entity
@Table(name = "trial") //table that we are mapping to
@EntityListeners(AuditingEntityListener.class)// This would be for auditing and automatically supplying data to entries
//@JsonIgnoreProperties here from jackson to supply values and can ignore input.
public class Audit implements Serializable {
    @Id //defines the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //automatically generate it
    private Long auditID;

    public Audit() { }

    public Audit(String interfac, String source, String target, String transactionID, String date, String status, String statusMessage, String server, String logLevel, String transactionData, String insertDateTime, String quoteNumber, String additionalInformation, String policyNumber, String serviceName) {
        this.interfac = interfac;
        this.source = source;
        this.target = target;
        this.transactionID = transactionID;
        this.date = date;
        this.status = status;
        this.statusMessage = statusMessage;
        this.server = server;
        this.logLevel = logLevel;
        this.transactionData = transactionData;
        this.insertDateTime = insertDateTime;
        this.quoteNumber = quoteNumber;
        this.additionalInformation = additionalInformation;
        this.policyNumber = policyNumber;
        this.serviceName = serviceName;
    }

    public Long getAuditID() {
        return auditID;
    }

    public void setAuditID(Long auditID) {
        this.auditID = auditID;
    }

    public String getInterfac() {
        return interfac;
    }

    public void setInterfac(String interfac) {
        this.interfac = interfac;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(String transactionID) {
        this.transactionID = transactionID;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    }

    public String getLogLevel() {
        return logLevel;
    }

    public void setLogLevel(String logLevel) {
        this.logLevel = logLevel;
    }

    public String getTransactionData() {
        return transactionData;
    }

    public void setTransactionData(String transactionData) {
        this.transactionData = transactionData;
    }

    public String getInsertDateTime() {
        return insertDateTime;
    }

    public void setInsertDateTime(String insertDateTime) {
        this.insertDateTime = insertDateTime;
    }

    public String getQuoteNumber() {
        return quoteNumber;
    }

    public void setQuoteNumber(String quoteNumber) {
        this.quoteNumber = quoteNumber;
    }

    public String getAdditionalInformation() {
        return additionalInformation;
    }

    public void setAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    private String interfac;

    private String source;

    private String target;

    private String transactionID;

    private String date;

    private String status;

    private String statusMessage;

    private String server;

    private String logLevel;

    private String transactionData;

    private String insertDateTime;

    private String quoteNumber;

    private String additionalInformation;

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    private String policyNumber;

    private String serviceName;

    public Audit (String state) {
        status = state;
    }
}
