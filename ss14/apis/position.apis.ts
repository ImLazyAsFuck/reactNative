import { Position } from "@/interfaces/position.interface";
import { axiosInstance } from "@/utils/axios-instance";
import { PaginatinedResponse, SingleResponse } from "@/utils/response-data";

export const getPositions = async () => {
  try {
    const resp = await axiosInstance.get<PaginatinedResponse<Position>>(
      "/positions"
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getPositionById = async (id: number) => {
  try {
    const resp = await axiosInstance.get<SingleResponse<Position>>(
      `/positions/${id}`
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createPosition = async (data: Partial<Position>) => {
  try {
    const resp = await axiosInstance.post<SingleResponse<Position>>(
      "/positions",
      data
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updatePosition = async (id: number, data: Partial<Position>) => {
  try {
    const resp = await axiosInstance.put<SingleResponse<Position>>(
      `/positions/${id}`,
      data
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deletePosition = async (id: number) => {
  try {
    const resp = await axiosInstance.delete<SingleResponse<Position>>(
      `/positions/${id}`
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};
