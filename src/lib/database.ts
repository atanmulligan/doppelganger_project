import { supabase } from './supabase'

// User IDs operations
export async function addUserID(prolificId: string) {
  const { data, error } = await supabase
    .from('user_ids')
    .insert([{ prolific_id: prolificId }])
    .select()

  if (error) {
    console.error('Error adding user ID:', error)
    throw error
  }
  return data
}

export async function getUserIDs() {
  const { data, error } = await supabase
    .from('user_ids')
    .select('prolific_id')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching user IDs:', error)
    throw error
  }
  return data?.map(row => row.prolific_id) || []
}

export async function checkUserID(prolificId: string) {
  const { data, error } = await supabase
    .from('user_ids')
    .select('prolific_id')
    .eq('prolific_id', prolificId)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
    console.error('Error checking user ID:', error)
    throw error
  }
  return !!data
}

// Consent logs operations
export async function addConsentLog(prolificId: string, consentStatus: string) {
  const { data, error } = await supabase
    .from('consent_logs')
    .insert([{ 
      prolific_id: prolificId, 
      consent_status: consentStatus 
    }])
    .select()

  if (error) {
    console.error('Error adding consent log:', error)
    throw error
  }
  return data
}

export async function getConsentLogs() {
  const { data, error } = await supabase
    .from('consent_logs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching consent logs:', error)
    throw error
  }
  return data || []
}

// Survey responses operations (for future use)
export async function saveSurveyResponse(prolificId: string, responseData: any) {
  const { data, error } = await supabase
    .from('survey_responses')
    .insert([{ 
      prolific_id: prolificId, 
      response_data: responseData 
    }])
    .select()

  if (error) {
    console.error('Error saving survey response:', error)
    throw error
  }
  return data
} 