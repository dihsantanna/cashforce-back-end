import  {  Optional  }  from  'sequelize'

export interface OrderAttributes {
  id: number,
  orderNfId: string,
  orderNumber: string,
  orderPath: string,
  orderFileName: string,
  orderOriginalName: string,
  emissionDate: string,
  pdfFile: string,
  emitedTo: string,
  nNf: string,
  CTE: string,
  value: string,
  cnpjId: number,
  userId: number,
  buyerId: number,
  providerId: number,
  oderStatusBuyer: string,
  orderStatusProvider: string,
  deliveryReceipt: string,
  cargoPackingList: string,
  deliveryCtrc: string
  createdAt: Date,
  updatedAt: Date,
}

export interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}