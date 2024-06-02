from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/translate-tone', methods=['POST'])
def translate_tone():
    data = request.get_json()
    sample_content = data.get('sample_content')
    new_draft = data.get('new_draft')
    
    # Perform tone analysis and translation here
    translated_draft = adjust_tone(sample_content, new_draft)
    
    return jsonify({'translated_draft': translated_draft})

def adjust_tone(sample, draft):
    # Tone adjustment logic
    tone_mapping = {
    # Casual to Formal
    "Hey": "Dear",
    "Just wanted to give you a heads up": "I would like to inform you",
    "Thanks": "Thank you",
    "Cheers": "Best regards",
    "Hey team": "Dear Team",
    "I am thrilled to announce": "I would like to inform you",
    "there": "Aaditya",  # Adjust recipient's name
    "Sam": "Shashank",   # Adjust sender's name
    
    # Informative to Persuasive
    "Hello everyone": "Hello folks",
    "Attention all": " Hello everyone",
    "excited to share": "eager to share",
    "wanted to share some information": "excited to introduce",
    "It's designed to improve efficiency and streamline processes": "that promises to revolutionize your workflow",
    "Best regards": "Warm regards",
    
    # Sympathetic to Assertive
    "understand your concerns and empathize with your situation": "It's time to take action and address the issues at hand",
    "please know that we're here to support you": "We need to implement changes immediately to resolve the situation effectively",
    
    # Additional Tones
    # Professional to Casual
    "Dear": "Hey",
    "I would like to inform you": "Just wanted to give you a heads up",
    "Thank you": "Thanks",
    "Best regards": "Cheers",
    "Dear Team": "Hey team",
    "I would like to inform you": "I am thrilled to announce",
    # Persuasive to Informative
    "Hello everyone": "Hello everyone",
    "eager to share": "excited to share",
    "I'm excited to introduce": " I wanted to share some information",
    "that promises to revolutionize your workflow": "It's designed to improve efficiency and streamline processes",
    "Warm regards": "Best regards",
    # Assertive to Sympathetic
    "It's time to take action and address the issues at hand": "I understand your concerns and empathize with your situation",
    "We need to implement changes immediately to resolve the situation effectively": "We shall move on with changes. Please know that we're here to support you",
    
}

    
    translated_draft = draft
    for informal, formal in tone_mapping.items():
        translated_draft = translated_draft.replace(informal, formal)
    
    # Ensure the translated draft is different from the original draft
    if translated_draft == draft:
        translated_draft += " (Translated)"
    
    return translated_draft

if __name__ == '__main__':
    app.run(debug=True)
