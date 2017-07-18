/*
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package net.telstra.tdev.apipractice.slot2.models;

import java.util.*;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class Message 
        implements java.io.Serializable {
    private static final long serialVersionUID = 5305799997107867397L;
    private String to;
    private String deliveryStatus;
    private String messageId;
    private String messageStatusLink;
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("to")
    public String getTo ( ) { 
        return this.to;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("to")
    public void setTo (String value) { 
        this.to = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("deliveryStatus")
    public String getDeliveryStatus ( ) { 
        return this.deliveryStatus;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("deliveryStatus")
    public void setDeliveryStatus (String value) { 
        this.deliveryStatus = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("messageId")
    public String getMessageId ( ) { 
        return this.messageId;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("messageId")
    public void setMessageId (String value) { 
        this.messageId = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("messageStatusLink")
    public String getMessageStatusLink ( ) { 
        return this.messageStatusLink;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("messageStatusLink")
    public void setMessageStatusLink (String value) { 
        this.messageStatusLink = value;
    }
 
}
 