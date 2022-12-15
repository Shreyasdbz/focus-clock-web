/** @format */

export enum PageRoutes {
  Clock,
  Tasks,
  Analytics,
  Account,
}

export enum PrimaryModalCommandActions {
  Open,
  Close,
  Save,
  Delete,
}

export enum ConfirmationModalComandActions {
  Confirm,
  Cancel,
}

export enum ModalTypes {
  None,
  NewTag,
  EditTag,
  DeleteTagConfirmation,
  NewTask,
  EditTask,
  DeleteTaskConfirmation,
  SignOutConfirmation,
  DeleteAccountConfirmation,
}
