/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmailSusbcription = /* GraphQL */ `
  mutation CreateEmailSusbcription(
    $input: CreateEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    createEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailSusbcription = /* GraphQL */ `
  mutation UpdateEmailSusbcription(
    $input: UpdateEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    updateEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailSusbcription = /* GraphQL */ `
  mutation DeleteEmailSusbcription(
    $input: DeleteEmailSusbcriptionInput!
    $condition: ModelEmailSusbcriptionConditionInput
  ) {
    deleteEmailSusbcription(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const createAgencySubscription = /* GraphQL */ `
  mutation CreateAgencySubscription(
    $input: CreateAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    createAgencySubscription(input: $input, condition: $condition) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;
export const updateAgencySubscription = /* GraphQL */ `
  mutation UpdateAgencySubscription(
    $input: UpdateAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    updateAgencySubscription(input: $input, condition: $condition) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteAgencySubscription = /* GraphQL */ `
  mutation DeleteAgencySubscription(
    $input: DeleteAgencySubscriptionInput!
    $condition: ModelAgencySubscriptionConditionInput
  ) {
    deleteAgencySubscription(input: $input, condition: $condition) {
      id
      name
      rif
      email
      phone
      subscriptionDate
      status
      scheduledDate
      createdAt
      updatedAt
    }
  }
`;
export const createAgency = /* GraphQL */ `
  mutation CreateAgency(
    $input: CreateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    createAgency(input: $input, condition: $condition) {
      userID
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          employees {
            nextToken
          }
          transports {
            nextToken
          }
          bookings {
            nextToken
          }
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAgency = /* GraphQL */ `
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
      userID
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          employees {
            nextToken
          }
          transports {
            nextToken
          }
          bookings {
            nextToken
          }
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAgency = /* GraphQL */ `
  mutation DeleteAgency(
    $input: DeleteAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    deleteAgency(input: $input, condition: $condition) {
      userID
      name
      rif
      email
      phone
      officies {
        items {
          id
          agencyID
          name
          state
          city
          address
          email
          phone
          employees {
            nextToken
          }
          transports {
            nextToken
          }
          bookings {
            nextToken
          }
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createOffice = /* GraphQL */ `
  mutation CreateOffice(
    $input: CreateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    createOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          brand
          serial
          type
          officeID
          bookings {
            nextToken
          }
          createdBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateOffice = /* GraphQL */ `
  mutation UpdateOffice(
    $input: UpdateOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    updateOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          brand
          serial
          type
          officeID
          bookings {
            nextToken
          }
          createdBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteOffice = /* GraphQL */ `
  mutation DeleteOffice(
    $input: DeleteOfficeInput!
    $condition: ModelOfficeConditionInput
  ) {
    deleteOffice(input: $input, condition: $condition) {
      id
      agencyID
      name
      state
      city
      address
      email
      phone
      employees {
        items {
          id
          name
          email
          phone
          ping
          type
          agencyID
          officeID
          permissions
          owner
          lastConnection
          createdAt
          updatedAt
        }
        nextToken
      }
      transports {
        items {
          id
          model
          brand
          serial
          type
          officeID
          bookings {
            nextToken
          }
          createdBy
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      name
      cities
      createdAt
      updatedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      email
      phone
      ping
      type
      agencyID
      officeID
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      email
      phone
      ping
      type
      agencyID
      officeID
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      email
      phone
      ping
      type
      agencyID
      officeID
      permissions
      owner
      lastConnection
      createdAt
      updatedAt
    }
  }
`;
export const createTransport = /* GraphQL */ `
  mutation CreateTransport(
    $input: CreateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    createTransport(input: $input, condition: $condition) {
      id
      model
      brand
      serial
      type
      officeID
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTransport = /* GraphQL */ `
  mutation UpdateTransport(
    $input: UpdateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    updateTransport(input: $input, condition: $condition) {
      id
      model
      brand
      serial
      type
      officeID
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTransport = /* GraphQL */ `
  mutation DeleteTransport(
    $input: DeleteTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    deleteTransport(input: $input, condition: $condition) {
      id
      model
      brand
      serial
      type
      officeID
      bookings {
        items {
          id
          code
          agencyID
          officeID
          transport
          customers {
            nextToken
          }
          tickets {
            nextToken
          }
          departureDate
          arrivalDate
          estimatedTime
          departureLoc
          destinationLoc
          stock
          service
          createdBy
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
          bookingID
          ticketID
          ticket {
            id
            code
            bookingID
            customerID
            seating
            status
            description
            url
            owner
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      departureDate
      arrivalDate
      estimatedTime
      departureLoc
      destinationLoc
      stock
      service
      createdBy
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
          bookingID
          ticketID
          ticket {
            id
            code
            bookingID
            customerID
            seating
            status
            description
            url
            owner
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      departureDate
      arrivalDate
      estimatedTime
      departureLoc
      destinationLoc
      stock
      service
      createdBy
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      code
      agencyID
      officeID
      transport
      customers {
        items {
          id
          name
          lastName
          ci
          email
          phone
          bookingID
          ticketID
          ticket {
            id
            code
            bookingID
            customerID
            seating
            status
            description
            url
            owner
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          code
          bookingID
          customerID
          seating
          status
          description
          url
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      departureDate
      arrivalDate
      estimatedTime
      departureLoc
      destinationLoc
      stock
      service
      createdBy
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      lastName
      ci
      email
      phone
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      lastName
      ci
      email
      phone
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      lastName
      ci
      email
      phone
      bookingID
      ticketID
      ticket {
        id
        code
        bookingID
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      code
      bookingID
      customerID
      seating
      status
      description
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createOrderTicket = /* GraphQL */ `
  mutation CreateOrderTicket(
    $input: CreateOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    createOrderTicket(input: $input, condition: $condition) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const updateOrderTicket = /* GraphQL */ `
  mutation UpdateOrderTicket(
    $input: UpdateOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    updateOrderTicket(input: $input, condition: $condition) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const deleteOrderTicket = /* GraphQL */ `
  mutation DeleteOrderTicket(
    $input: DeleteOrderTicketInput!
    $condition: ModelOrderTicketConditionInput
  ) {
    deleteOrderTicket(input: $input, condition: $condition) {
      id
      orderID
      ticketID
      ticket {
        id
        code
        bookingID
        customerID
        seating
        status
        description
        url
        owner
        createdAt
        updatedAt
      }
      owner
      createdAt
      updatedAt
      orderDetailOrderTicketsId
    }
  }
`;
export const createOrderDetail = /* GraphQL */ `
  mutation CreateOrderDetail(
    $input: CreateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    createOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      customerName
      customerEmail
      isGuest
      paymentID
      payment {
        id
        refenrece
        amount
        metadata
        wallet
        createdAt
        updatedAt
        owner
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          ticket {
            id
            code
            bookingID
            customerID
            seating
            status
            description
            url
            owner
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      walletID
      createdAt
      updatedAt
      walletOrdersId
      owner
    }
  }
`;
export const updateOrderDetail = /* GraphQL */ `
  mutation UpdateOrderDetail(
    $input: UpdateOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    updateOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      customerName
      customerEmail
      isGuest
      paymentID
      payment {
        id
        refenrece
        amount
        metadata
        wallet
        createdAt
        updatedAt
        owner
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          ticket {
            id
            code
            bookingID
            customerID
            seating
            status
            description
            url
            owner
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      walletID
      createdAt
      updatedAt
      walletOrdersId
      owner
    }
  }
`;
export const deleteOrderDetail = /* GraphQL */ `
  mutation DeleteOrderDetail(
    $input: DeleteOrderDetailInput!
    $condition: ModelOrderDetailConditionInput
  ) {
    deleteOrderDetail(input: $input, condition: $condition) {
      id
      amount
      paymentMethod
      customerName
      customerEmail
      isGuest
      paymentID
      payment {
        id
        refenrece
        amount
        metadata
        wallet
        createdAt
        updatedAt
        owner
      }
      orderTickets {
        items {
          id
          orderID
          ticketID
          ticket {
            id
            code
            bookingID
            customerID
            seating
            status
            description
            url
            owner
            createdAt
            updatedAt
          }
          owner
          createdAt
          updatedAt
          orderDetailOrderTicketsId
        }
        nextToken
      }
      walletID
      createdAt
      updatedAt
      walletOrdersId
      owner
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      refenrece
      amount
      metadata
      wallet
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      refenrece
      amount
      metadata
      wallet
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      refenrece
      amount
      metadata
      wallet
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrderDetailHistory = /* GraphQL */ `
  mutation CreateOrderDetailHistory(
    $input: CreateOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    createOrderDetailHistory(input: $input, condition: $condition) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          refenrece
          amount
          metadata
          wallet
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          items {
            id
            orderID
            ticketID
            owner
            createdAt
            updatedAt
            orderDetailOrderTicketsId
          }
          nextToken
        }
        walletID
        createdAt
        updatedAt
        walletOrdersId
        owner
      }
      walletID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderDetailHistory = /* GraphQL */ `
  mutation UpdateOrderDetailHistory(
    $input: UpdateOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    updateOrderDetailHistory(input: $input, condition: $condition) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          refenrece
          amount
          metadata
          wallet
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          items {
            id
            orderID
            ticketID
            owner
            createdAt
            updatedAt
            orderDetailOrderTicketsId
          }
          nextToken
        }
        walletID
        createdAt
        updatedAt
        walletOrdersId
        owner
      }
      walletID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderDetailHistory = /* GraphQL */ `
  mutation DeleteOrderDetailHistory(
    $input: DeleteOrderDetailHistoryInput!
    $condition: ModelOrderDetailHistoryConditionInput
  ) {
    deleteOrderDetailHistory(input: $input, condition: $condition) {
      id
      orderID
      order {
        id
        amount
        paymentMethod
        customerName
        customerEmail
        isGuest
        paymentID
        payment {
          id
          refenrece
          amount
          metadata
          wallet
          createdAt
          updatedAt
          owner
        }
        orderTickets {
          items {
            id
            orderID
            ticketID
            owner
            createdAt
            updatedAt
            orderDetailOrderTicketsId
          }
          nextToken
        }
        walletID
        createdAt
        updatedAt
        walletOrdersId
        owner
      }
      walletID
      owner
      googleOwner
      createdAt
      updatedAt
    }
  }
`;
export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
      userID
      email
      status
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          customerName
          customerEmail
          isGuest
          paymentID
          payment {
            id
            refenrece
            amount
            metadata
            wallet
            createdAt
            updatedAt
            owner
          }
          orderTickets {
            nextToken
          }
          walletID
          createdAt
          updatedAt
          walletOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
      userID
      email
      status
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          customerName
          customerEmail
          isGuest
          paymentID
          payment {
            id
            refenrece
            amount
            metadata
            wallet
            createdAt
            updatedAt
            owner
          }
          orderTickets {
            nextToken
          }
          walletID
          createdAt
          updatedAt
          walletOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
      userID
      email
      status
      notificationToken
      previousBalance
      orders {
        items {
          id
          amount
          paymentMethod
          customerName
          customerEmail
          isGuest
          paymentID
          payment {
            id
            refenrece
            amount
            metadata
            wallet
            createdAt
            updatedAt
            owner
          }
          orderTickets {
            nextToken
          }
          walletID
          createdAt
          updatedAt
          walletOrdersId
          owner
        }
        nextToken
      }
      owner
      googleOwner
      id
      createdAt
      updatedAt
    }
  }
`;
